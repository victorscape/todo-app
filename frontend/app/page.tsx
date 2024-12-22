import Task from "@/components/task/Task";

export default function Home() {
  return (
   
    <div className="flex flex-col justify-center items-center bg-background1 w-fit h-fit pl-8 pr-8 pt-4 pb-4 rounded-xl">
    <p className="text-center text-2xl mb-4">To-do List</p>
      <div className="mb-8">
        <form className="flex justify-center items-center">
          <input type="text" id="new-task" placeholder="New task" className="mr-4 h-10 p-4 rounded-lg text-gray-600"/>
          <input type="submit" id="submit" value="+" className="h-10 w-10 bg-green-600 rounded-lg text-2xl hover:bg-green-500 hover:cursor-pointer"/>
        </form>
      </div>
      
      <div className="w-full">
        <Task id="task-1" task="My first task"/>
        <Task id="task-2" task="My second task"/>
        <Task id="task-3" task="My third task"/>
      </div>
    </div>
   
  );
}
