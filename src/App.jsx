import React from "react";

import MyRoutes from "./admin/routes/MyRoutes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MyRoutes />
        {/* <AdminLogin /> */}
      </div>
    </QueryClientProvider>
  );
};

export default App;
