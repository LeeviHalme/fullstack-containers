Script started on Wed Feb 19 16:46:48 2025
[?2004h[0;36m([0;32mmain U:3 ?:6 [0;31m✗[0;36m)[39m [0;36mtodo-backend[39m docker exec -i e6a5a6ad9c22d8026351067d038a63137be3c630cadca44cfccf2f264c8a8dfd mongosh -u root -p example
[?2004lCurrent Mongosh Log ID:	67b5eee08b7bd623fea00aa0
Connecting to:		mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.8
Using MongoDB:		8.0.4
Using Mongosh:		2.3.8

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-02-19T13:48:00.521+00:00: For customers running the current memory allocator, we suggest changing the contents of the following sysfsFile
   2025-02-19T13:48:00.521+00:00: For customers running the current memory allocator, we suggest changing the contents of the following sysfsFile
   2025-02-19T13:48:00.521+00:00: We suggest setting the contents of sysfsFile to 0.
   2025-02-19T13:48:00.521+00:00: Your system has glibc support for rseq built in, which is not yet supported by tcmalloc-google and has critical performance implications. Please set the environment variable GLIBC_TUNABLES=glibc.pthread.rseq=0
   2025-02-19T13:48:00.521+00:00: vm.max_map_count is too low
   2025-02-19T13:48:00.521+00:00: We suggest setting swappiness to 0 or 1, as swapping can cause performance problems.
------

test> show dbs
admin         100.00 KiB
config         48.00 KiB
local          72.00 KiB
the_database   56.00 KiB
test> use the_database
switched to db the_database
the_database> show collections
todos
the_database> db.todos.find([ {})
[
  {
    _id: ObjectId('67b5e10ca542cd26f1a00aa1'),
    text: 'Write code',
    done: true
  },
  {
    _id: ObjectId('67b5e10ca542cd26f1a00aa2'),
    text: 'Learn about containers',
    done: false
  }
]
the_database> db.todos.insertOne({≠ })^[[D^[[D ^[[D              )^[[D^[[D           text: "Increase the number of tools in my tool belt", done:false })
{
  acknowledged: true,
  insertedId: ObjectId('67b5ef218b7bd623fea00aa1')
}
the_database> ^[[A^[[A        db.todos.find({})
[
  {
    _id: ObjectId('67b5e10ca542cd26f1a00aa1'),
    text: 'Write code',
    done: true
  },
  {
    _id: ObjectId('67b5e10ca542cd26f1a00aa2'),
    text: 'Learn about containers',
    done: false
  },
  {
    _id: ObjectId('67b5ef218b7bd623fea00aa1'),
    text: 'Increase the number of tools in my tool belt',
    done: false
  }
]
the_database> ^C[?2004h[0;36m([0;32mmain U:3 ?:6 [0;31m✗[0;36m)[39m [0;36mtodo-backend[39m exit
[?2004lexit

Script done on Wed Feb 19 16:48:38 2025
