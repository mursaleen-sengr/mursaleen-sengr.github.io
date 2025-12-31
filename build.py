#!/usr/bin/env python3
"""
Build script to embed JSON data into script.js
Run this after updating any JSON files in the data/ folder
"""

import json
import os
import re

def load_json_files():
    """Load all JSON files from the data directory"""
    data = {}
    json_files = {
        'about': 'data/about.json',
        'experience': 'data/experience.json',
        'projects': 'data/projects.json',
        'skills': 'data/skills.json',
        'education': 'data/education.json'
    }
    
    for key, filepath in json_files.items():
        if os.path.exists(filepath):
            with open(filepath, 'r', encoding='utf-8') as f:
                data[key] = json.load(f)
        else:
            print(f"Warning: {filepath} not found")
    
    return data

def generate_data_object(data):
    """Generate the embedded DATA object as a string"""
    # Compact JSON without newlines
    data_lines = []
    for key, value in data.items():
        json_str = json.dumps(value, separators=(',', ':'), ensure_ascii=False)
        data_lines.append(f"    {key}: {json_str}")
    
    return "const DATA = {\n" + ",\n    \n".join(data_lines) + "\n};"

def update_script_js(data_object):
    """Update script.js with the new DATA object"""
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the start and end markers
    start_marker = '// ========== EMBEDDED DATA =========='
    end_marker = '// ========== ABOUT SECTION RENDERER =========='
    
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    
    if start_idx == -1 or end_idx == -1:
        print("Error: Could not find DATA section markers!")
        return False
    
    replacement = f'''{start_marker}
// Data is embedded directly to avoid fetch issues on GitHub Pages

{data_object}

// ========== DATA LOADING ==========
async function loadJSON(key) {{
    return DATA[key] || null;
}}

'''
    
    # Build new content
    new_content = content[:start_idx] + replacement + content[end_idx:]
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def main():
    print("🔨 Building script.js with latest JSON data...")
    
    # Load JSON files
    data = load_json_files()
    if not data:
        print("❌ No data loaded. Check your JSON files.")
        return
    
    print(f"✓ Loaded {len(data)} data files")
    
    # Generate DATA object
    data_object = generate_data_object(data)
    
    # Update script.js
    if update_script_js(data_object):
        print("✅ script.js updated successfully!")
        print("\nNext steps:")
        print("  1. Test locally: python3 -m http.server 8080")
        print("  2. Commit: git add script.js && git commit -m 'Update data'")
        print("  3. Deploy: git push origin main")
    else:
        print("❌ Failed to update script.js")

if __name__ == "__main__":
    main()
