## Style Reqs

Editor must supports (or just use vscode, it's better anyways!):

* prettier
* tslint

vscode extensions you'll want:

```
Prettier
TSLint
Move TS
```

Config files for these are provided, be sure to install any necessary plugins for your editors

## Imports

Group by source. First group is third-party libraries. Second group is local modules. Third group is config or require-to-execute files.

## Git Workflow

* Branch for feature work, typically don't commit directly to master
* Branches should be `snake_case` with descriptive names referencing the feature or fix
* Keep your PR's focused if possible, remember: _easy-to-review -> easy-to-merge_
* Use amend commits where you can to keep commits meaningful
* Pull-rebase against master before PR'ing

> There's not CI setup yet, but let's not get lazy because of it. Don't PR broken
> code.

## Task tracking - none atm, may incorporate waffle.io in the future
