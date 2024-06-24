-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: rido
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car_repair_detail_cost`
--

DROP TABLE IF EXISTS `car_repair_detail_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_repair_detail_cost` (
  `car_repair_detail_cost_id` bigint NOT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `date_of_car_repaired` datetime(6) DEFAULT NULL,
  `date_of_repairing` datetime(6) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  `issue_detail` varchar(255) DEFAULT NULL,
  `total_cost_of_repairing` decimal(38,2) DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  PRIMARY KEY (`car_repair_detail_cost_id`),
  KEY `FKpjv66x78ge4decnf62xkw7yed` (`hub_id`),
  CONSTRAINT `FKpjv66x78ge4decnf62xkw7yed` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_repair_detail_cost`
--

LOCK TABLES `car_repair_detail_cost` WRITE;
/*!40000 ALTER TABLE `car_repair_detail_cost` DISABLE KEYS */;
INSERT INTO `car_repair_detail_cost` VALUES (1,'Nano','CG10','2024-03-18 15:07:24.355567','2024-03-18 14:48:16.869554','https://empoms.s3.amazonaws.com/Car.jpg','Battery Down',270.05,1),(2,'Nano','CG10','2024-03-19 11:36:45.424997','2024-03-18 15:07:00.257330','https://empoms.s3.amazonaws.com/Car.jpg','Battery Down',350.05,2),(52,'Nano','CG10','2024-03-22 11:08:35.210844','2024-03-22 11:07:11.052334','https://empoms.s3.amazonaws.com/Car.jpg','Battery Down',350.05,1),(102,'eBike123','EB123','2024-06-12 15:43:07.185834','2024-05-17 18:23:51.820898','https://empoms.s3.amazonaws.com/e4f97238-3b42-458b-9e13-acb968634a28_Screenshot 2024-02-15 120647.png','gadi kharab',2500.00,52),(103,'eBike123','EB123','2024-06-12 15:53:05.474770','2024-05-17 18:23:51.820898','https://empoms.s3.amazonaws.com/6c878f7f-1605-4c09-8759-4a3ab4192501_Screenshot 2024-03-06 120954 - Copy.png','gadi kharab',5000.00,52),(104,'MG Hector','BU123','2024-06-12 15:56:49.834223','2024-05-21 17:39:08.721297','https://empoms.s3.amazonaws.com/c46ab90f-a453-48c2-b299-8a9db81f31b7_Screenshot 2024-03-06 121034 - Copy.png','gadi panchar ',5465.00,1),(105,'car','34gfd554','2024-06-12 16:00:36.394286','2024-06-12 15:59:39.881228','https://empoms.s3.amazonaws.com/ec9952a5-11aa-495b-a2de-b897ae2068d4_Screenshot 2024-02-15 120647.png','nice',9879.00,1),(152,'swift','cg8764153','2024-06-12 17:10:07.917921','2024-06-12 17:09:07.557102','https://empoms.s3.amazonaws.com/2094d924-4292-427a-8b27-f05140031195_Screenshot 2024-02-15 120647.png','nice',6576.00,1),(202,'Devid Putra','cgd3543554','2024-06-12 17:51:44.206661','2024-06-12 17:11:27.743140','https://empoms.s3.amazonaws.com/cb13b9f3-2b4e-48c0-9372-5820e5665616_Screenshot 2024-03-06 121034 - Copy.png','nice',500.00,1),(252,'Devid Putra','cgd3543554','2024-06-13 10:20:07.382042','2024-06-12 18:03:03.650657','https://empoms.s3.amazonaws.com/811e9ee9-0c80-4a46-8011-60c3678c018f_Screenshot 2024-03-06 121034.png','nice',100.00,1);
/*!40000 ALTER TABLE `car_repair_detail_cost` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:48
