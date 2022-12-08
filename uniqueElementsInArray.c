#include <stdio.h>

#define MAX_SIZE 100

int main() {
  int arr[MAX_SIZE] = {1,30,4,1,3,3,10,10};
  // int arr[MAX_SIZE] = {1,2,2,2,3,3};
  int size = 8, i, j, count;

  /* Find frequency of each element */
  for (i = 0; i < size; i++) {
    count = 0;

    for (j = 0; j < size; j++) {
      if (i != j) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
    }

    if (count == 0) {
      printf("%d\t", arr[i]);
    }
  }

  return 0;
}