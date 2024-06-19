import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TasksFormpage } from "./pages/TasksFormPage";
import { Taskspage } from "./pages/TasksPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={< Navigate to="/tasks"/>}/>
        <Route path="/tasks" element={<Taskspage />}/>
        <Route path="/tasks-create" element={<TasksFormpage />}/>
        <Route path="/tasks/:id" element={<TasksFormpage />}/>
      </Routes>
      <Toaster/>
    </div>
  </BrowserRouter>
  );
}

export default App