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
-- Table structure for table `driver_document`
--

DROP TABLE IF EXISTS `driver_document`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_document` (
  `driver_documentid` bigint NOT NULL AUTO_INCREMENT,
  `daddressproof` varchar(255) DEFAULT NULL,
  `dl` varchar(255) DEFAULT NULL,
  `dpassbook` varchar(255) DEFAULT NULL,
  `dphoto` varchar(255) DEFAULT NULL,
  `dsignature` varchar(255) DEFAULT NULL,
  `ifsccode` varchar(255) DEFAULT NULL,
  `vfv` varchar(255) DEFAULT NULL,
  `vrc` varchar(255) DEFAULT NULL,
  `vsv` varchar(255) DEFAULT NULL,
  `account_holder_name` varchar(255) DEFAULT NULL,
  `account_no` bigint DEFAULT NULL,
  `adhar_card` varchar(255) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `driver_image` varchar(255) DEFAULT NULL,
  `driver_pan_card` varchar(255) DEFAULT NULL,
  `driver_signature` varchar(255) DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `document_status` enum('APPROVED','PENDING','REJECTED') DEFAULT NULL,
  `ifsc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`driver_documentid`),
  UNIQUE KEY `UK_1hmty79gib646wlsaqidpg15n` (`driver_id`),
  CONSTRAINT `FK9mrv7olse081hbdisim0h8tc7` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_document`
--

LOCK TABLES `driver_document` WRITE;
/*!40000 ALTER TABLE `driver_document` DISABLE KEYS */;
INSERT INTO `driver_document` VALUES (1,NULL,'https://empoms.s3.amazonaws.com/d274a7f3-95b9-4b9d-b303-bf41afad458b_Screenshot 2024-03-06 121209 - Copy - Copy - Copy.png','https://empoms.s3.amazonaws.com/afb938e3-445d-44fb-906f-3c536b2dfd6e_Screenshot 2024-03-06 121034 - Copy.png',NULL,NULL,NULL,NULL,NULL,NULL,'jyoti',232327832323,'https://empoms.s3.amazonaws.com/4f77ceb4-22ad-4987-b418-2a4ad6a02985_Screenshot 2024-03-06 120954 - Copy.png','raipur','https://empoms.s3.amazonaws.com/a3a0c321-cd29-4be8-b359-696136893a6a_Screenshot 2024-02-15 120647.png',NULL,'https://empoms.s3.amazonaws.com/19c0b82a-3bdb-411d-840b-fa4a5804107f_Screenshot 2024-03-06 121034.png',1,'APPROVED','sbi000900'),(2,NULL,'https://empoms.s3.amazonaws.com/d274a7f3-95b9-4b9d-b303-bf41afad458b_Screenshot 2024-03-06 121209 - Copy - Copy - Copy.png','https://empoms.s3.amazonaws.com/afb938e3-445d-44fb-906f-3c536b2dfd6e_Screenshot 2024-03-06 121034 - Copy.png',NULL,NULL,NULL,NULL,NULL,NULL,'jyoti',2327832323,'https://empoms.s3.amazonaws.com/4f77ceb4-22ad-4987-b418-2a4ad6a02985_Screenshot 2024-03-06 120954 - Copy.png','raipur','https://empoms.s3.amazonaws.com/a3a0c321-cd29-4be8-b359-696136893a6a_Screenshot 2024-02-15 120647.png',NULL,'https://empoms.s3.amazonaws.com/19c0b82a-3bdb-411d-840b-fa4a5804107f_Screenshot 2024-03-06 121034.png',2,'APPROVED','sbi000900');
/*!40000 ALTER TABLE `driver_document` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:46
