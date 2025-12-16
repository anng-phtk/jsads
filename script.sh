#!/usr/bin/env sh

set -e

BASE_DIR=$(pwd)

create_lang_structure () {
  LANG_DIR=$1

  echo "Setting up directory structure for: $LANG_DIR"

  mkdir -p "$LANG_DIR"/Mechanics/Two_Pointers/{Sliding_Window,Fast_Slow,Left_Right}
  mkdir -p "$LANG_DIR"/Mechanics/{Prefix_Sums,Bit_Manipulation,Stack_Queue_Deque,Heap_Priority_Queue}

  mkdir -p "$LANG_DIR"/Strategies/{Hashing_Frequency,Greedy,Dynamic_Programming,Recursion_Backtracking,Binary_Search_On_Answer}

  mkdir -p "$LANG_DIR"/Data_Structures/{Array_String,Linked_List,Tree,Trie,Graph,Union_Find,Matrix}

  mkdir -p "$LANG_DIR"/Advanced_Topics/{Concurrency_Interactive,Design,Math_Number_Theory_Geometry,Simulation_Enumeration}

  mkdir -p "$LANG_DIR"/Practice_Sets/{Sliding_Window_Certification,Prefix_Sum_Core,Heap_Core,DP_Foundations}

  echo "✓ Done: $LANG_DIR"
  echo
}

# Create for both languages
create_lang_structure "$BASE_DIR/jsts"
create_lang_structure "$BASE_DIR/python"

echo "All directory structures created successfully."
