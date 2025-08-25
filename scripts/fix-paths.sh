#!/bin/bash

# GitHub Pages用にパスを修正するスクリプト
BASE_PATH="/nextjs-test-blog"

echo "Fixing paths for GitHub Pages..."

# HTMLファイル内のパスを修正
find out -name "*.html" -type f -exec sed -i '' "s|href=\"/_next|href=\"$BASE_PATH/_next|g" {} \;
find out -name "*.html" -type f -exec sed -i '' "s|src=\"/_next|src=\"$BASE_PATH/_next|g" {} \;
find out -name "*.html" -type f -exec sed -i '' "s|href=\"/images|href=\"$BASE_PATH/images|g" {} \;
find out -name "*.html" -type f -exec sed -i '' "s|src=\"/images|src=\"$BASE_PATH/images|g" {} \;

# JSONファイル内のパスも修正
find out -name "*.json" -type f -exec sed -i '' "s|\"/_next|\"$BASE_PATH/_next|g" {} \;

echo "Path fixing completed!"
