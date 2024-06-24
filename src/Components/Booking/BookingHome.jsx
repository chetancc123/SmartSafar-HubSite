import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Booking1 } from "./Booking1";
import { Booking2 } from "./Booking2";
import { Booking3 } from "./Booking3";
import { Booking4 } from "./Booking4";


const BookingHome = ({}) => {
  return (
   <>
   
   <Flex
      flexDirection={{ md: "row", base: "column" }}
      ml="100px"
      border="3px solid #13C39C"
      mt={10}
    >
      <Tabs isLazy size="md" width="100%">
        <TabList
          justifyContent="space-between"
          //   position="fixed"
          zIndex="1"
          width="100%"
          py="4" // Padding on the y-axis
          px="8" // Padding on the x-axis
          boxShadow="md"
        >
          <Tab bg="#13C39C" borderRadius="10" fontWeight="bold">
            Rental List
          </Tab>
          <Tab bg="#13C39C" borderRadius="10" fontWeight="bold">
            Schedule List
          </Tab>
          <Tab bg="#13C39C" borderRadius="10" fontWeight="bold">
            Transport List
          </Tab>
          
        </TabList>

        <TabPanels mt="10px">
          <TabPanel>
            <p>
              <Booking1 />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Booking2 />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Booking3 />
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              <Booking4 />
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
   </>
  );
};

export default BookingHome;
