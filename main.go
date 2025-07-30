package main

import (
	"bytes"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"

	"github.com/yuin/goldmark"
)

func main() {
	md := goldmark.New()

	// Ensure build dir exists
	os.MkdirAll("build", os.ModePerm)

	// Walk through content directory
	filepath.WalkDir("content", func(path string, d fs.DirEntry, err error) error {
		if err != nil || d.IsDir() {
			return err
		}

		if strings.HasSuffix(path, ".md") {
			input, _ := os.ReadFile(path)

			var buf bytes.Buffer
			md.Convert(input, &buf)

			// Create HTML file in build/
			htmlFile := "build/" + strings.TrimSuffix(filepath.Base(path), ".md") + ".html"
			htmlContent := fmt.Sprintf(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../static/style.css">
</head>
<body>
%s
<script src="../static/script.js"></script>
</body>
</html>`, buf.String())

			os.WriteFile(htmlFile, []byte(htmlContent), 0644)
			fmt.Println("Generated:", htmlFile)
		}
		return nil
	})
}
