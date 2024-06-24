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
-- Table structure for table `hub_employee`
--

DROP TABLE IF EXISTS `hub_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hub_employee` (
  `hub_employee_id` bigint NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `profile_img_link` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `emp_signature` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `adhar_no` bigint DEFAULT NULL,
  `pan_no` varchar(255) DEFAULT NULL,
  `passbook_img` varchar(255) DEFAULT NULL,
  `passbook_pic` varchar(255) DEFAULT NULL,
  `signatue_pic` varchar(255) DEFAULT NULL,
  `uid_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`hub_employee_id`),
  UNIQUE KEY `UKeg3stdd6vaf1wnroqdbdmxrr8` (`username`),
  UNIQUE KEY `UKrf2y0luo0ja0tbxw9r8f5im9v` (`email`),
  UNIQUE KEY `UK72eeti26cm8sj2j1siv233rvl` (`phone_no`),
  KEY `FKmqk0l6nk4y2ikuggh81k4em8l` (`hub_id`),
  CONSTRAINT `FKmqk0l6nk4y2ikuggh81k4em8l` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hub_employee`
--

LOCK TABLES `hub_employee` WRITE;
/*!40000 ALTER TABLE `hub_employee` DISABLE KEYS */;
INSERT INTO `hub_employee` VALUES (1,'yash123@gmail.com','yash','$2a$10$drd43rdrWSIjjkgD0xCTguqgGjaTJ9o7IxN1yhKPj8b0slpeosT7y','+916268170294',NULL,'yash',1,NULL,'raipura',NULL,NULL,NULL,NULL,NULL,NULL),(2,'ash123@gmail.com','shubham','$2a$10$mu1mKKub5epqJPnzk3p3..r8s5eGgJE9WwG034IIDY4oPzdy5RAGi','123456789091',NULL,'ash',1,NULL,'dalli ',NULL,NULL,NULL,NULL,NULL,NULL),(52,'Ramu123@gmail.com','','$2a$10$3b6hqLQB3dmoUNdRaj2.8.U4KFUHusX4ztk8C.CZjcu/0VECTloPu','123456789092',NULL,'Ramu',52,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(102,'mohan123@gmail.com',NULL,'$2a$10$vcutinbb7g//LMcy/b8YtuP1RWiJNEmXidXOCPncfSRelZ6fWU0va','123456789367',NULL,'mohan',52,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `hub_employee` ENABLE KEYS */;
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
