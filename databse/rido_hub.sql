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
-- Table structure for table `hub`
--

DROP TABLE IF EXISTS `hub`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hub` (
  `hub_id` bigint NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `hub_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `manager_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `profile_img_link` varchar(255) DEFAULT NULL,
  `status` enum('AVAILABLE','ONGOING','IN_COMPLETED') DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `hub_address_id` bigint DEFAULT NULL,
  `passbook_pic` varchar(255) DEFAULT NULL,
  `signatue_pic` varchar(255) DEFAULT NULL,
  `uid_no` varchar(255) DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `hub_uniqe_id` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `hub_latitude` double NOT NULL,
  `hub_longitude` double NOT NULL,
  PRIMARY KEY (`hub_id`),
  UNIQUE KEY `UK_8tyx8oyakomrlryeka2becg8` (`hub_address_id`),
  UNIQUE KEY `UKjps446be8jusg2k1r19s4k80e` (`hub_name`),
  UNIQUE KEY `UK46s6c010ug9bgm9wuu2i6b6ts` (`email`),
  UNIQUE KEY `UK7l6dka8f0i5wt1b83yxfyrna1` (`phone_no`),
  UNIQUE KEY `UK4gf0uxnkdg96blf7use8wa83` (`location`),
  UNIQUE KEY `UKowud47gty0gwfs6xdqrf40iyq` (`hub_uniqe_id`),
  KEY `FK7fs7ge695fjoahces5j8d3esf` (`admin_id`),
  CONSTRAINT `FK76pmjk1vdn3qgl689clqc9elb` FOREIGN KEY (`hub_address_id`) REFERENCES `hub_address` (`hub_address_id`),
  CONSTRAINT `FK7fs7ge695fjoahces5j8d3esf` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hub`
--

LOCK TABLES `hub` WRITE;
/*!40000 ALTER TABLE `hub` DISABLE KEYS */;
INSERT INTO `hub` VALUES (1,'Manager','ser123@gmail.com','ser','Rampur','yashwant dewangan','$2a$10$vSwcI5mcC2WNj6ZN./VeUOYVwYC9nduaJ5WURkPaV0aGoyJPrg6.y','12345678916','https://empoms.s3.amazonaws.com/75394bf5-701f-4daf-bcc6-8e765fd8486a_WhatsApp Image 2024-05-01 at 13.21.21_ea55c9f7.jpg',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/d71d3a96-e522-45dd-89ca-e65f6cb5d1a3_WhatsApp Image 2024-05-01 at 13.21.21_ea55c9f7.jpg',NULL,'3033804774514',1,'raipur','SSH0001    ','chhatishgarh',0,0),(2,'Manager','rwt123@gmail.com','rwt','Raipur','RIMSHI','$2a$10$z5QO1vFLeBL8zqrd2Lm/fuZXekMWiuFdjMoTQ06eInHnDbv44JRiK','12345678917',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'raipur','SSH0002','chhatishgarh',0,0),(52,'Manager','Raja123@gmail.com','Raja','Korba','SHUBHAMI','$2a$10$LTQZWcuYQ1Hbvw2vUyBbd.PXtEpOF1o0DYg/Hi/l35ieR7dLepBfS','12345678926',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'delhi','SSH0003','delhi',0,0),(103,'Manager','delhiIAS123@gmail.com','delhiIAS','Delhi','RAMBAI','$2a$10$mYfP8zRt8jYGxgkmycsjWOpLPaM71c5Qaaqs3QenxT0KVgeHaFZDG','1234567892643',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'delhi','SSH0004','delhi',0,0);
/*!40000 ALTER TABLE `hub` ENABLE KEYS */;
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
