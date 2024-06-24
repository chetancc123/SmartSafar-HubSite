import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import HubLogin from "../Components/Login/Hublogin";
import HubSignup from "../Components/Login/Hubsignup";
import Dashboard from "../Components/Dashboard";
import PrivateRoute from "../Privateroute/Privateroute";
import Home from "../Components/Home";
import EmployeeSignup from "../Components/Login/EmployeeSignup";
import Management from "../Components/Management/Management";

import Carlist from "../Components/Carlist";
import Booking from "../Components/Booking/Booking";
import Settings from "../Components/Settings";
import Driverlist from "../Components/driver/Driverlist";
import Transport from "../Components/Transport/Transport";
import Assigningdriver from "../Components/driver/Asiigningdriver";
import Runningcar from "../Components/Runningcar";
import Returncar from "../Components/Returncar";
import Chargecar from "../Components/Chargcar";
import Newbookinghistory from "../Components/Booking/Newbookinghistory";
import Todaybookinghistory from "../Components/Todaybookinghistory";
import Todaynewbookinghistory from "../Components/Todaynewbookinghistory";
import Newbookingdetails from "../Components/Booking/Newbookingdetails";
import LoginSecurity from "../Components/LoginSecurity";
import Activedriver from "../Components/driver/Activedriver";
import Totallist from "../Components/Totallist";
import Driverdetail from "../Components/driver/Driverdetail";
import Activebooking from "../Components/Booking/Activebooking";
import Assignedcar from "../Components/Assignedcar";

import Carmaintance from "../Components/Transport/Carmaintance";
import Employeepage from "../Components/Employee/Employeepage";
import Employeepending from "../Components/Employee/Employeepending";
import Managermanagemant from "../Components/Management/Managermanagemant";
import Totalrepairingcost from "../Components/Toatalrepairingcostthismonth";

import CarForRepairing from "../Components/Management/CarForRepairing";

import RequestforRepair from "../Components/RequestforRepair";
import Approveddriverlisttransport from "../Components/Transport/Approveddriverlisttransport";
import TransportDriverDetails from "../Components/Transport/TransportDriverDetails";
import TransportApprovedDriverDetails from "../Components/Transport/TransportApprovedDriverDetails";
import TransportRequestDriver from "../Components/Transport/TransportRequestDriver";
import Ebikelist from "../Components/E-bike/Ebikelist";
import BookingHome from "../Components/Booking/BookingHome";
import { AuthContext } from "../AuthContext/Authcontext";

import { Box } from "@chakra-ui/react";
import Addebike from "../Components/E-bike/Adde-bike";
import TransportHome from "../Components/Transport/TransportHome";
import TransportHome1 from "../Components/Transport/TransportHome";
import ApprovedFourWheelerTransportdriver from "../Components/Transport/ApprovedFourWheelerTransportdriver";
import ApprovedTwoWheelerTransportdriver from "../Components/Transport/ApprovedTwoWheelerTransportdriver";
import NewtransportdriverFourWheeler from "../Components/Transport/NewTransportDriverFourWheeler";
import NewtransportdrivertwoWheeler from "../Components/Transport/NewtransportdrivertwoWheeler";
import ApprovedDetailFourWheelerDriver from "../Components/Transport/ApprovedDetailFourWheelerDriver";
import ApprovedDetailTwoWheelerDriver from "../Components/Transport/ApprovedDetailTwoWheelerDriver";
import PendingDetailDriverTwoWheeler from "../Components/Transport/PendingDetailDriverTwoWheeler";
import PendingDetailDriverFourWheeler from "../Components/Transport/PendingDetailDriverFourWheeler";
import Pendingdriverrequest from "../Components/driver/pendingdriverrequest";

import AssignVehicleHome from "../Components/Assign vehicle/AssignVehicleHome";
import SelectedAssignVehicle from "../Components/Assign vehicle/SelectedAssignVehicle";
import PendingDriverDetails from "../Components/driver/PendingDriverDetails";
import ExactRepairAmount from "../Components/Management/ExactRepairAmount";
// Import other components/pages here...

const HubProtectedRoute = ({ userEmail }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {isAuthenticated && <Home />}
      <Box w={"80%"} mt={"5%"}>
        <Routes>
          {/* <Route path="/" element={ <PrivateRoute><Home /> </PrivateRoute>} /> */}
          <Route path="/" element={<HubLogin />} />
          {/* <Route path="/Home" element={< Home/>} /> */}
          <Route path="/HubSignup" element={<HubSignup />} />
          <Route path="/EmployeeSignup" element={<EmployeeSignup />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/Management"
            element={
              <PrivateRoute>
                <Management />
              </PrivateRoute>
            }
          />
          <Route
            path="/Carlist"
            element={
              <PrivateRoute>
                <Carlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
          <Route
            path="/Setting"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/driverlist"
            element={
              <PrivateRoute>
                <Driverlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/Transport"
            element={
              <PrivateRoute>
                <Transport />
              </PrivateRoute>
            }
          />
          <Route
            path="/Assigningdriver"
            element={
              <PrivateRoute>
                <Assigningdriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/Runningcar"
            element={
              <PrivateRoute>
                <Runningcar />
              </PrivateRoute>
            }
          />
          <Route
            path="/Returncar"
            element={
              <PrivateRoute>
                <Returncar />
              </PrivateRoute>
            }
          />
          <Route
            path="/Chargecar"
            element={
              <PrivateRoute>
                <Chargecar />
              </PrivateRoute>
            }
          />
          <Route
            path="/Newbookinghistory"
            element={
              <PrivateRoute>
                <Newbookinghistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/Todaybookinghistory"
            element={
              <PrivateRoute>
                <Todaybookinghistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/Todaynewbookinghistory"
            element={
              <PrivateRoute>
                <Todaynewbookinghistory />
              </PrivateRoute>
            }
          />
          <Route
            path="/Newbookingdetails"
            element={
              <PrivateRoute>
                <Newbookingdetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/LoginSecurity"
            element={
              <PrivateRoute>
                <LoginSecurity />
              </PrivateRoute>
            }
          />
          <Route
            path="/Activedriver"
            element={
              <PrivateRoute>
                <Activedriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/Totallist"
            element={
              <PrivateRoute>
                <Totallist />
              </PrivateRoute>
            }
          />
          <Route
            path="/Driverdetail/:driverId"
            element={
              <PrivateRoute>
                <Driverdetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/Activebooking"
            element={
              <PrivateRoute>
                <Activebooking />
              </PrivateRoute>
            }
          />
          <Route
            path="/Assignedcar"
            element={
              <PrivateRoute>
                <Assignedcar />
              </PrivateRoute>
            }
          />
          <Route
            path="/ExactRepairAmount/:carRepairId"
            element={
              <PrivateRoute>
                <ExactRepairAmount />
              </PrivateRoute>
            }
          />
          <Route
            path="/Carmaintance"
            element={
              <PrivateRoute>
                <Carmaintance />
              </PrivateRoute>
            }
          />
          <Route
            path="/Employeepage"
            element={
              <PrivateRoute>
                <Employeepage />
              </PrivateRoute>
            }
          />
          <Route
            path="/Employeepending"
            element={
              <PrivateRoute>
                <Employeepending />
              </PrivateRoute>
            }
          />
          <Route
            path="/Managermanagemant"
            element={
              <PrivateRoute>
                <Managermanagemant />
              </PrivateRoute>
            }
          />
          <Route
            path="/Totalrepairingcost"
            element={
              <PrivateRoute>
                <Totalrepairingcost />
              </PrivateRoute>
            }
          />
          <Route
            path="/CarForRepairing"
            element={
              <PrivateRoute>
                <CarForRepairing />
              </PrivateRoute>
            }
          />
          <Route
            path="/RequestforRepair/:carRepairId"
            element={
              <PrivateRoute>
                <RequestforRepair />
              </PrivateRoute>
            }
          />
          <Route
            path="/BookingHome"
            element={
              <PrivateRoute>
                <BookingHome />
              </PrivateRoute>
            }
          />
          <Route
            path="/Ebikelist"
            element={
              <PrivateRoute>
                <Ebikelist />
              </PrivateRoute>
            }
          />
          <Route
            path="/TransportRequestDriver"
            element={
              <PrivateRoute>
                <TransportRequestDriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/TransportApprovedDriverDetails"
            element={
              <PrivateRoute>
                <TransportApprovedDriverDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/Approveddriverlisttransport"
            element={
              <PrivateRoute>
                <Approveddriverlisttransport />
              </PrivateRoute>
            }
          />
          <Route
            path="/TransportDriverDetails"
            element={
              <PrivateRoute>
                <TransportDriverDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/Addebike"
            element={
              <PrivateRoute>
                <Addebike />
              </PrivateRoute>
            }
          />
          <Route
            path="/TransportHome"
            element={
              <PrivateRoute>
                <TransportHome1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/ApprovedFourWheelerTransportdriver"
            element={
              <PrivateRoute>
                <ApprovedFourWheelerTransportdriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/ApprovedTwoWheelerTransportdriver"
            element={
              <PrivateRoute>
                <ApprovedTwoWheelerTransportdriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/NewtransportdriverFourWheeler"
            element={
              <PrivateRoute>
                <NewtransportdriverFourWheeler />
              </PrivateRoute>
            }
          />
          <Route
            path="/NewtransportdrivertwoWheeler"
            element={
              <PrivateRoute>
                <NewtransportdrivertwoWheeler />
              </PrivateRoute>
            }
          />
          <Route
            path="/ApprovedDetailFourWheelerDriver/:id"
            element={
              <PrivateRoute>
                <ApprovedDetailFourWheelerDriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/ApprovedDetailTwoWheelerDriver/:id"
            element={
              <PrivateRoute>
                <ApprovedDetailTwoWheelerDriver />
              </PrivateRoute>
            }
          />
          <Route
            path="/PendingDetailDriverTwoWheeler/:id"
            element={
              <PrivateRoute>
                <PendingDetailDriverTwoWheeler />
              </PrivateRoute>
            }
          />
          <Route
            path="/PendingDetailDriverFourWheeler/:id"
            element={
              <PrivateRoute>
                <PendingDetailDriverFourWheeler />
              </PrivateRoute>
            }
          />
          

          <Route
            path="/AssignVehicleHome/"
            element={
              <PrivateRoute>
                <AssignVehicleHome />
              </PrivateRoute>
            }
          />

<Route
            path="/SelectedAssignVehicle/"
            element={
              <PrivateRoute>
                <SelectedAssignVehicle />
              </PrivateRoute>
            }
          />

          <Route
            path="/PendingDriverdetails/:driverId"
            element={
              <PrivateRoute>
                <PendingDriverDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/Pendingdriverrequest/"
            element={
              <PrivateRoute>
                <Pendingdriverrequest />
              </PrivateRoute>
            }
          />
        </Routes>
      </Box>
    </>
  );
};

export default HubProtectedRoute;
