# Reproduction Instructions

1. [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jrestall/react-router-bug/tree/main)

2. Open site and get automatically redirected to `/login` for your convenience.
3. Note that the root loader data `myData` is `Hello`.
4. Click 'submit', note that `myData` is empty.
5. Install react-router 7.5.0 instead and reload site and steps.
6. Note that the root loader data is not cleared when a error is thrown.



