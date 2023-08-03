import NotesDB from "./database.helpers";

async function mockDataToDB() {
  await NotesDB.deleteMany({});
  await NotesDB.insertMany(defaultNotes);
}

export { mockDataToDB };

const defaultNotes = [
  {
    title: "Make a sandwitch",
    created_at: new Date("12.12.2023"),
    category: "Thoughts",
    content: "SomeContent 12.12.2021",
    is_archived: false,
  },
  {
    title: "Make a sandwitch2",
    created_at: new Date("12.12.2023"),
    category: "Task",
    content: "SomeContent 12.12.2021",
    is_archived: false,
  },
  {
    title: "Make a sandwitch3",
    created_at: new Date("12.12.2023"),
    category: "Idea",
    content: "SomeContent 12.12.2021",
    is_archived: true,
  },
  {
    title: "Make a sandwitch4",
    created_at: new Date("12.12.2023"),
    category: "Task",
    content: "SomeContent 12.12.2021",
    is_archived: false,
  },
  {
    title: "Make a sandwitch5",
    created_at: new Date("12.12.2023"),
    category: "Quote",
    content: "SomeContent 12.12.2021",
    is_archived: true,
  },
  {
    title: "Make a sandwitch6",
    created_at: new Date("12.12.2023"),
    category: "Quote",
    content: "SomeContent 12.12.2021",
    is_archived: true,
  },
  {
    title: "Make a sandwitch7",
    created_at: new Date("12.12.2023"),
    category: "Task",
    content: "SomeContent 12.12.2021",
    is_archived: false,
  },
];
