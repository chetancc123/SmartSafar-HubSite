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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL,
  `dob` datetime(6) DEFAULT NULL,
  `alternative_no` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_profile_link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`username`),
  UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UKf8t8gieb3aqt12uddh3tfkx9m` (`phone_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2000-01-01 00:00:00.000000','123456789167','goli123@gmail.com','male',NULL,'https://empoms.s3.amazonaws.com/Car.jpg','goli',NULL,'$2a$10$s9qAECqnK5OJ2QoKLFDiXOR5.PnoKlc1pTeBWQcNi6Y5j6h5AzErO','12345678913','goli'),(2,NULL,NULL,'fake123@gmail.com',NULL,NULL,NULL,NULL,NULL,'$2a$10$EkIpYzK0z3lJ5On9EzmC0uZ7Vi2nNAxfsN5XYE1SZ9o6mioE4F94G','12345678919','fake'),(52,NULL,NULL,'abhi123@gmail.com',NULL,NULL,NULL,NULL,NULL,'$2a$10$YfnUkMqLryRZ.YzLCWbAE.Arw9VIRUXbheNMS7mucxiYKBwGnpqbC','12345678987','abhi'),(102,NULL,NULL,'asu123@gmail.com',NULL,NULL,NULL,NULL,NULL,'$2a$10$daoq6ctgwIVQH203un7FdeN1lg.MFJmdIc9eRgQwMtHwsMTRK7282','12345678546','asu'),(152,NULL,NULL,'himanshu123@gmail.com',NULL,NULL,NULL,NULL,NULL,'$2a$10$Y.g7piUUB1KCSZhZjcYjHOfmxaDRP9.5sgvpSdfm1RCcilmd7jWMu','1234567854856','himanshu'),(202,'1990-05-15 05:30:00.000000','1234567890','jaadu@gmail.com','male',NULL,'https://empoms.s3.amazonaws.com/1f0a0904-610f-49e2-8d9e-ba6fe15be801_BeautyPlus_20240411150617126_save.jpg','Jalshwari',NULL,'$2a$10$sMEWitUsVg/vItVQ69w6teD4iKIGjaeC.DHKWq3/aTwQJpGlXOg/e','+916266180889','jaadu');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
