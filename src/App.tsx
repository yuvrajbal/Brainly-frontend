import { PlusIcon, Share2 } from "lucide-react";
import "./App.css";
import AllNotes from "./components/AllNotes";
import { AppSidebar } from "./components/app-sidebar";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import NavigationBar from "./components/Navigation";
import CreateNote from "./components/CreateNote";
import UserSignForm from "./components/SigninUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContent from "./components/AddContent";
function App() {
  return (
    <BrowserRouter>
      {/* <SidebarProvider>
        <AppSidebar /> */}
      <main className="">
        {/* <SidebarTrigger /> */}
        {/* <NavigationBar /> */}
        {/* <CreateNote /> */}
        {/* <UserSignForm type="signin" submit={() => console.log("submitted")} />
          <UserSignForm type="signup" submit={() => console.log("submitted")} /> */}
        <AddContent />
        {/* <AllNotes /> */}
      </main>
      {/* </SidebarProvider> */}
    </BrowserRouter>
  );
}

export default App;
