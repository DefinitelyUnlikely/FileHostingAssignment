# Database thoughts and ideas

## How to deal with folders/files
One possible solution is keeping files/folders in a table with a structure 
that looks something like:
id, parent id, extension, name. 

To get the children, all I would really need to do is a SELECT statement that get all folders/files 
that has the parent id of the folder I am interested in rendering.

There is probably a good argument for having folders and files be different tables. And in the files
table we simply have a parent folder id column instead of parent id column. Means folder column can remove the 
extension column and make it required in the files table.