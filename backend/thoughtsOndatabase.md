# Database thoughts and ideas

## How to deal with folders/files
One possible solution is keeping files/folders in a table with a structure 
that looks something like:
id, parent id, extension, name. 

There could be an issue with getting the children of a given folder, or at least more API calls
than might really be neccesery. 