#!/bin/bash

# This script creates the intelligent leetcode study folder structure in Bash.

BASE_DIR="."
JS_TS_DIR="${BASE_DIR}/jsts"
PYTHON_DIR="${BASE_DIR}/python"
PROGRESS_DIR="${BASE_DIR}/progress"
DOCS_DIR="${BASE_DIR}/documentation"

echo "Creating main base directories..."

mkdir -p "${PROGRESS_DIR}"
mkdir -p "${DOCS_DIR}"
mkdir -p "${JS_TS_DIR}"
mkdir -p "${PYTHON_DIR}"

# --- Define the intelligent structure within a function for reuse ---
create_structure() {
    local lang_dir=$1
    echo "Creating structure within ${lang_dir}..."

    # Data Structures Category
    mkdir -p "${lang_dir}/Data_Structures/Array/Matrix"
    mkdir -p "${lang_dir}/Data_Structures/Array/String"
    mkdir -p "${lang_dir}/Data_Structures/Array/Linked_List"
    mkdir -p "${lang_dir}/Data_Structures/Tree/Binary_Tree"
    mkdir -p "${lang_dir}/Data_Structures/Tree/Binary_Search_Tree"
    mkdir -p "${lang_dir}/Data_Structures/Hash_Table"
    mkdir -p "${lang_dir}/Data_Structures/Stack_Queue_Deque"
    mkdir -p "${lang_dir}/Data_Structures/Graph"
    mkdir -p "${lang_dir}/Data_Structures/Heap_Priority_Queue"
    mkdir -p "${lang_dir}/Data_Structures/Trie"
    mkdir -p "${lang_dir}/Data_Structures/Union_Find"

    # Algorithms Category
    mkdir -p "${lang_dir}/Algorithms/Search/Depth_First_Search_DFS"
    mkdir -p "${lang_dir}/Algorithms/Search/Breadth_First_Search_BFS"
    mkdir -p "${lang_dir}/Algorithms/Search/Binary_Search"
    mkdir -p "${lang_dir}/Algorithms/General_Techniques/Two_Pointers_Sliding_Window_Rolling_Window"
    mkdir -p "${lang_dir}/Algorithms/General_Techniques/Dynamic_Programming_Memoization"
    mkdir -p "${lang_dir}/Algorithms/General_Techniques/Greedy"
    mkdir -p "${lang_dir}/Algorithms/General_Techniques/Sorting"
    mkdir -p "${lang_dir}/Algorithms/General_Techniques/Recursion_Backtracking"
    mkdir -p "${lang_dir}/Algorithms/General_Techniques/Bit_Manipulation_Bitmask"
    mkdir -p "${lang_dir}/Algorithms/Advanced_Topics/Math_Number_Theory_Geometry"
    mkdir -p "${lang_dir}/Algorithms/Advanced_Topics/Simulation_Enumeration"
    mkdir -p "${lang_dir}/Algorithms/Advanced_Topics/Design"
    mkdir -p "${lang_dir}/Algorithms/Advanced_Topics/Concurrency_Interactive"
}

# Apply the structure function to both language directories
create_structure "${JS_TS_DIR}"
create_structure "${PYTHON_DIR}"

# Create placeholder files.
echo "Creating placeholder files..."

cat <<EOL > "${BASE_DIR}/README.md"
# LeetCode Study Plan
Welcome to my study repository! 

Organized into Data Structures and Algorithms paradigms. Track progress using the CSV files in the progress/ directory.
EOL

cat <<EOL > "${PROGRESS_DIR}/README.md"
# Progress Tracking Metadata
This folder contains CSV files to track completed problems.
EOL

# Create the CSV files with headers
echo "Problem Number,Problem Name,Status,Date Solved,Folder_Path" > "${PROGRESS_DIR}/progress_js_ts.csv"
echo "Problem Number,Problem Name,Status,Date Solved,Folder_Path" > "${PROGRESS_DIR}/progress_python.csv"

echo "--------------------------------------------------"
echo "Directory structure and initial files created successfully in ${BASE_DIR}!"
echo "--------------------------------------------------"
