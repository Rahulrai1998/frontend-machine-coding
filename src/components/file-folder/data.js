export const FileFolderData = {
  id: 0,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 1,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id:5,
              name:"hello.html",
              isFolder:false,
              items:[]
            },
            {
              id:6,
              name:""
            }
          ],
        },
        
      ],
    },
    {
      id: 2,
      name: "Documents",
      children: [
        {
          id: 3,
          name: "Word.doc",
        },
        {
          id: 4,
          name: "Powerpoint.ppt",
        },
      ],
    },
    {
      id: 5,
      name: "Downloads",
      children: [
        {
          id: 6,
          name: "unnamed.txt",
        },
        {
          id: 7,
          name: "Misc",
          children: [
            {
              id: 8,
              name: "foo.txt",
            },
            {
              id: 9,
              name: "bar.txt",
            },
          ],
        },
      ],
    },
  ],
};
