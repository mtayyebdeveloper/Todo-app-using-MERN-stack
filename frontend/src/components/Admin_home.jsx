import React,{useEffect} from "react";
import { useAuth } from "../store/Store";

function Admin_home() {
  const { allusers, adminalltodos,allcontacts,getUserData } = useAuth();

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <>
      <div className="datas w-full mt-3 flex items-center justify-between flex-col sm:flex-row">
        <div className="sm:w-1/3 w-full border border-blue-700 m-2 h-[140px] text-center">
          <div className="w-full py-2 bg-blue-600 text-xl text-white font-semibold h-[40px]">
            All Users
          </div>
          <div className="flex items-center justify-center w-full h-[100px]">
            {allusers.length}
          </div>
        </div>
        <div className="sm:w-1/3 w-full border border-blue-700 m-2 h-[140px] text-center">
          <div className="w-full h-[40px] py-2 bg-blue-600 text-xl text-white font-semibold">
            All Todos
          </div>
          <div className="flex items-center justify-center w-full h-[100px]">
            {adminalltodos.length}
          </div>
        </div>
        <div className="sm:w-1/3 w-full border border-blue-700 m-2 h-[140px] text-center">
          <div className="w-full h-[40px] py-2 bg-blue-600 text-xl text-white font-semibold">
            All Inbox
          </div>
          <div className="flex items-center justify-center w-full h-[100px]">
            {allcontacts.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin_home;
