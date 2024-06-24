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
-- Table structure for table `hub_employee_payment`
--

DROP TABLE IF EXISTS `hub_employee_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hub_employee_payment` (
  `employee_order_id` bigint NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `local_datetime` datetime(6) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `receipt` varchar(255) DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `hub_employee_id` bigint DEFAULT NULL,
  PRIMARY KEY (`employee_order_id`),
  KEY `FKery0sagyieve43p4rdsru9l7f` (`hub_id`),
  KEY `FKlhb9xdyi4nl8o2y8hdx05the3` (`hub_employee_id`),
  CONSTRAINT `FKery0sagyieve43p4rdsru9l7f` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKlhb9xdyi4nl8o2y8hdx05the3` FOREIGN KEY (`hub_employee_id`) REFERENCES `hub_employee` (`hub_employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hub_employee_payment`
--

LOCK TABLES `hub_employee_payment` WRITE;
/*!40000 ALTER TABLE `hub_employee_payment` DISABLE KEYS */;
INSERT INTO `hub_employee_payment` VALUES (1,'15000','2024-05-16 11:46:00.000000','order_OB3yK7uV74V7q1','created',NULL,'receipt #1',1,1),(2,'15000','2024-05-16 11:46:00.000000','order_OB3yQdbxioiLA8','created',NULL,'receipt #1',1,1),(3,'15000','2024-05-16 11:47:00.000000','order_OB3ynGKzeOsg7f','created',NULL,'receipt #1',1,1),(4,'15000','2024-05-16 11:47:00.000000','order_OB3z0WE8sh6VCi','created',NULL,'receipt #1',1,1),(5,'15000','2024-05-16 11:47:00.000000','order_OB3zOQfSOBmoVv','created',NULL,'receipt #1',1,1),(6,'51000','2024-05-16 11:48:00.000000','order_OB3zi1TaAQloLZ','created',NULL,'receipt #1',1,1),(7,'15000','2024-05-16 11:48:00.000000','order_OB40JLySpr1evy','created',NULL,'receipt #1',1,1),(8,'15000','2024-05-16 11:49:00.000000','order_OB40rQpyA0nUmQ','created',NULL,'receipt #1',1,1),(52,'51000','2024-05-16 11:51:00.000000','order_OB43CyrLbcsYya','created',NULL,'receipt #1',1,1),(102,'98700','2024-05-16 15:58:00.000000','order_OB8GRFKTldBAnI','created',NULL,'receipt #1',1,1),(152,'15000','2024-05-28 11:00:00.000000','order_OFnaZRVrQcMtFQ','created',NULL,'receipt #1',1,1),(153,'65700','2024-05-28 11:03:00.000000','order_OFneHEs8wdzlTV','paid','pay_OFneQ3F0P8GC1O','receipt #1',1,1),(202,'15000','2024-05-28 14:19:00.000000','order_OFqyuKyFdgLYsV','created',NULL,'receipt #1',1,1),(203,'98700','2024-05-28 14:22:00.000000','order_OFr2OJWDoWwXVq','created',NULL,'receipt #1',1,1),(252,'98700','2024-05-28 14:24:00.000000','order_OFr4HBkGZbZQSa','paid','pay_OFr4NFZoNHenBQ','receipt #1',1,1),(302,'15000','2024-05-28 17:15:00.000000','order_OFtyiZvsyOSi2L','paid','pay_OFtyqxdBJpgMlv','receipt #1',1,1),(303,'15000','2024-05-28 18:07:00.000000','order_OFusN0mg0K28eP','created',NULL,'receipt #1',1,1),(352,'15000','2024-06-04 11:34:00.000000','order_OIZvJWnHToZj4f','created',NULL,'receipt #1',1,1),(402,'15000','2024-06-07 13:12:00.000000','order_OJnAyKBCwR7wwz','paid','pay_OJnB6tTFCZCFGg','receipt #1',1,1),(403,'15000','2024-06-07 15:25:00.000000','order_OJpRrexwnVtPzP','created',NULL,'receipt #1',1,1),(452,'15000','2024-06-10 14:46:00.000000','order_OL0OEQ7D5NlKuH','paid','pay_OL0OLic8420dzn','receipt #1',1,1);
/*!40000 ALTER TABLE `hub_employee_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:45
