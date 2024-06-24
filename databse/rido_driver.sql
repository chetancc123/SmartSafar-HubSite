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
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver` (
  `driver_id` bigint NOT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `adhar_no` bigint DEFAULT NULL,
  `alt_phone_number` varchar(255) DEFAULT NULL,
  `dl_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `licence_no` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pan_no` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `profile_img` mediumblob,
  `profile_img_link` varchar(255) DEFAULT NULL,
  `profile_img_name` varchar(255) DEFAULT NULL,
  `status` enum('AVAILABLE','ONGOING','IN_COMPLETED') DEFAULT NULL,
  `user_phone_no_otp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `vehicle_assign_status` enum('CHECKIN','CHECKOUT') DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_vehicle_id` bigint DEFAULT NULL,
  `driver_uniqe_id` varchar(255) DEFAULT NULL,
  `driver_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  `driver_latitude` double NOT NULL,
  `driver_longitude` double NOT NULL,
  `admin_id` bigint DEFAULT NULL,
  PRIMARY KEY (`driver_id`),
  UNIQUE KEY `UK1a5ifv9d7c1kcxvpu226ckim4` (`username`),
  UNIQUE KEY `UKfchuyotq64tagkwktlh4qttyy` (`email`),
  UNIQUE KEY `UKgt3hg5tgbcc4jiulifqil0nd8` (`phone_no`),
  UNIQUE KEY `UK_btxr2v7fgr183pgpcgwpuxe1e` (`vehicle_vehicle_id`),
  UNIQUE KEY `UK76qukw6feftm2kcva9992wrg5` (`pan_no`),
  UNIQUE KEY `UK1aoeqycgfo4g4u42hf94ho8ab` (`dl_number`),
  UNIQUE KEY `UKtosfgltkwr6gyh17iky263o60` (`adhar_no`),
  KEY `FKasr05mx4fm7e3qneopw81ew1m` (`hub_id`),
  KEY `FKefeyq7typopo914t2qtvvd1kv` (`admin_id`),
  CONSTRAINT `FK8w6q7qclk7gsbwcfi5pewqdxc` FOREIGN KEY (`vehicle_vehicle_id`) REFERENCES `vehicle` (`vehicle_id`),
  CONSTRAINT `FKasr05mx4fm7e3qneopw81ew1m` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKefeyq7typopo914t2qtvvd1kv` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
INSERT INTO `driver` VALUES (1,NULL,'raipur',12334464747,'+9876543225','dl7447','mani123@gmail.com',NULL,NULL,NULL,'shubham','pan2334','$2a$10$AbK3wgWKtc0RvXGHFr5JFeQAykm4tPenwdjgwdgpKMqiJRH1DvP3i','+917999232409',NULL,'https://empoms.s3.amazonaws.com/ec699902-0798-4c47-9626-1aa89dc9db76_Screenshot 2024-03-06 120954 - Copy.png',NULL,'AVAILABLE',NULL,'mani','CHECKOUT',1,568,NULL,'TWO_WHEELER',23.567,25.567,NULL),(2,NULL,NULL,NULL,NULL,NULL,'shiv123@gmail.com',NULL,NULL,NULL,'shiv',NULL,'$2a$10$CMkeXdnmKYZMwy9/oC2YCuYLTWUwAqAOwg73.nzWTgqoz9lxJ4KTS','+916266180866',NULL,NULL,NULL,'AVAILABLE',NULL,'shiv','CHECKOUT',1,456,NULL,'FOUR_WHEELER',20.567,21.568,NULL),(152,NULL,NULL,NULL,NULL,NULL,'aj123@gmail.com',NULL,NULL,NULL,'rupesh',NULL,'$2a$10$sBvID0fRbNgy0Fp7oCyMjukm55QdHTFCSIJjjU2zunSCA2u5cBTJC','+9162661808662',NULL,NULL,NULL,'AVAILABLE',NULL,'aj','CHECKIN',1,565,NULL,'FOUR_WHEELER',0,0,NULL),(202,NULL,NULL,NULL,NULL,NULL,'jallu123@gmail.com',NULL,NULL,NULL,'ram',NULL,'$2a$10$jJevJUBVat6pPi4qWQuKf.FG/3h4sBAXWs.vNHOrpkU4fTTevqKay','+91626618086623',NULL,NULL,NULL,'AVAILABLE',NULL,'jallu','CHECKOUT',1,NULL,NULL,'FOUR_WHEELER',20.567,21.568,NULL),(252,NULL,NULL,NULL,NULL,NULL,'ishan123@gmail.com',NULL,NULL,NULL,'ishan',NULL,'$2a$10$geAfcxPcxl3Ptu1FnP5DTuSQQJ3K8EOcKLyyngE4Lk2gXCxdj3eUm','+916266180866243',NULL,NULL,NULL,'AVAILABLE',NULL,'ishan','CHECKOUT',1,NULL,'SER800','TWO_WHEELER',0,0,NULL),(302,NULL,NULL,NULL,NULL,NULL,'vishal123@gmail.com',NULL,NULL,NULL,'rishi',NULL,'$2a$10$wduZ1xeiuQhJj5a.9FiU8.1Uk3cuBd5HwyBJhjmuP.NUTFBv3TRLW','+9162661808662432',NULL,NULL,NULL,'IN_COMPLETED',NULL,'vishal','CHECKOUT',52,252,'KOR908','FOUR_WHEELER',0,0,NULL),(356,NULL,NULL,NULL,NULL,NULL,'aaru123@gmail.com',NULL,NULL,NULL,'shubham',NULL,'$2a$10$8wLQVLA223SBSBqLi0mf/eH4TjJ9sCQu/Qkfb892n6SKf/57wJGJu','+9162661808662436',NULL,NULL,NULL,'AVAILABLE',NULL,'aaru','CHECKOUT',52,564,'KOR558','TWO_WHEELER',0,0,NULL),(402,NULL,NULL,NULL,NULL,NULL,'titu123@gmail.com',NULL,NULL,NULL,'saxena',NULL,'$2a$10$4vdYRCYeBIutlg92w7CMm.Un/EA3hveC0NM2X5s9f2aPHVwpvX5oe','+9162661808662439',NULL,NULL,NULL,'AVAILABLE',NULL,'titu','CHECKIN',2,703,'RAI950','FOUR_WHEELER',0,0,NULL),(403,NULL,NULL,NULL,NULL,NULL,'nehu123@gmail.com',NULL,NULL,NULL,'chetan',NULL,'$2a$10$wd4st4YLionaR4Yd7yGt1OdY0OE5VtwsUlGhUX1m6DNqNJ6/xY8De','+916266180866244',NULL,NULL,NULL,'AVAILABLE',NULL,'nehu','CHECKIN',2,353,'RAI402','TWO_WHEELER',0,0,NULL),(452,NULL,NULL,NULL,NULL,NULL,'AVI@gmail.com',NULL,NULL,NULL,'harsh',NULL,'$2a$10$oGG0hlIdsc9OsojcXMzoCu46.9lnn5Mpk78.t/bRvsFJHBTXGeHS.','+998781159568',NULL,NULL,NULL,'AVAILABLE',NULL,'AVI','CHECKIN',52,559,'KOR370','TWO_WHEELER',0,0,NULL),(502,NULL,'123 Main Street, City',9876543210,'+9876543210','DL-1234567890123','jyoti@gmail.com',NULL,NULL,NULL,'John Doe','ABCDE1234F','$2a$10$IZ3UU7FuBMOoCTMAapDpGOmEyOcWJsz6aKWbBAEBNNLeEmeNANJAu','+919927335197',NULL,'https://empoms.s3.amazonaws.com/1f58c1c4-5741-439a-bcb3-3e4b93881f8e_light.jpg',NULL,'AVAILABLE',NULL,'RISHIKESH','CHECKIN',1,454,'RAI586',NULL,0,0,NULL);
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:47
