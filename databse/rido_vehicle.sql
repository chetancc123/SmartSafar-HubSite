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
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `vehicle_id` bigint NOT NULL,
  `battery` varchar(255) DEFAULT NULL,
  `charging_time` varchar(255) DEFAULT NULL,
  `distance` double NOT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `price_per_km` decimal(38,2) DEFAULT NULL,
  `seating_capacity` varchar(255) DEFAULT NULL,
  `transmission_typo` varchar(255) DEFAULT NULL,
  `vehicle_image_name` varchar(255) DEFAULT NULL,
  `vehicle_img` mediumblob,
  `vehicle_img_link` varchar(500) DEFAULT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `vehicle_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_service_type` enum('STANDARD','PREMIUM') DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  `assign_hub_date` datetime(6) DEFAULT NULL,
  `chassis_no` varchar(255) NOT NULL,
  `date_of_purchase` datetime(6) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  `vehiclerange` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vehicle_id`),
  UNIQUE KEY `UK2sil9hywncq3g0e4f51qhe6ib` (`vehicle_no`),
  KEY `FK9mxstgi1rgoa9kebepcuclmmx` (`hub_id`),
  KEY `FKmvpv57g2s60juo7v2d0yb8rab` (`admin_id`),
  CONSTRAINT `FK9mxstgi1rgoa9kebepcuclmmx` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKmvpv57g2s60juo7v2d0yb8rab` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'Lithium-ion','5 hours',0,'XYZ4141','1000000',15.00,'5','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/Car.jpg','Nano','CG10','ENGAGED','FOUR_WHEELER',2,'STANDARD',1,NULL,'',NULL,NULL,NULL),(2,'Lithium-ion','5 hours',0,'XYZ679','5500000',30.00,'5','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/Car.jpg','Fortuner','CG04','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,NULL,'',NULL,NULL,NULL),(52,'Lithium-ion','6 hours',0,'XYZ647','1500000',25.00,'5','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/Car.jpg','Nexon','CG14','ENGAGED','FOUR_WHEELER',1,'STANDARD',1,NULL,'',NULL,NULL,NULL),(102,'Lithium-ion','3 hours',0,'XYZ345','150000000',75.00,'5','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/Car.jpg','RangeRover','CG24','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,NULL,'',NULL,NULL,NULL),(152,'Lithium-ion','2 hours',0,'INS123','5500000',30.00,'5','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/Car.jpg','MG Hector','BU123','MAINTENANCE','FOUR_WHEELER',1,'PREMIUM',1,NULL,'',NULL,NULL,NULL),(202,'Lithium-ion','2 hours',0,'INS123','200000',30.00,'2','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/Car.jpg','OLA','CG123','ENGAGED','TWO_WHEELER',1,'PREMIUM',1,NULL,'',NULL,NULL,NULL),(252,'Lithium-ion','2 hours',0,'INS123','1000',10.00,'1','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/light.jpg','eBike123','EB123','MAINTENANCE','FOUR_WHEELER',52,'PREMIUM',1,NULL,'',NULL,NULL,NULL),(302,'Lithium-ion','2 hours',0,'INS123','200000',30.00,'2','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/3cb7cd5f-ff4d-452a-bc78-6c6c00c76e29_Phone1.png','OLA','CG34123','ENGAGED','TWO_WHEELER',52,'PREMIUM',1,'2024-05-24 13:14:05.206260','',NULL,NULL,NULL),(353,'Lithium-ion','2 hours',0,'INS123','200000',30.00,'2','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/8329d9ee-40dc-424e-9a66-f4f5319ae3a4_Phone1.png','OLA','CG14123','ENGAGED','TWO_WHEELER',1,'PREMIUM',1,'2024-05-28 11:01:18.474307','',NULL,NULL,NULL),(402,'6','5',0,'34567','45678',43.00,'3','AUTOMATIC',NULL,NULL,'https://empoms.s3.amazonaws.com/99fad245-a00d-4c6e-96bd-484f40dd07d6_Login 2.jpg','car','cf345','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-03 14:37:51.883147','',NULL,NULL,NULL),(452,'fwe','4',0,'4567','3554678',33.00,'3','AUTOMATIC',NULL,NULL,'https://empoms.s3.amazonaws.com/9786518e-bb6f-42f2-978f-972b4653ea6b_Login 2.jpg','swift','dw4657','ENGAGED','FOUR_WHEELER',103,'PREMIUM',1,'2024-05-28 20:40:46.460596','',NULL,NULL,NULL),(453,'fwe','4',0,'456657','3554678',33.00,'3','AUTOMATIC',NULL,NULL,'https://empoms.s3.amazonaws.com/582dae4a-fad8-4824-acd0-dc0c54fca6a3_Login 2.jpg','swift','dw4658','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-03 14:49:23.633493','',NULL,NULL,NULL),(454,'fwe','4',0,'456659','3554678',33.00,'3','AUTOMATIC',NULL,NULL,'https://empoms.s3.amazonaws.com/bb0e3f31-1725-4ea4-bf91-b10c584e5bf3_Login 2.jpg','swift','dw4659','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-03 15:05:19.731526','',NULL,NULL,NULL),(456,'34','3',0,'3242353','432243',34.00,'3','MANUAL',NULL,NULL,'https://empoms.s3.amazonaws.com/a1b065d8-cea4-43d5-a8f6-e26c0e31ae35_Login 2.jpg','ola','fg64543','ENGAGED','TWO_WHEELER',1,'PREMIUM',1,'2024-06-04 16:12:08.168389','',NULL,NULL,NULL),(457,'34','3',0,'3242354','432243',34.00,'3','MANUAL',NULL,NULL,'https://empoms.s3.amazonaws.com/53ce8de3-1ac5-4d0d-9eff-3463794a07b6_Login 2.jpg','ola','fg64544','ENGAGED','TWO_WHEELER',2,'PREMIUM',1,'2024-06-10 14:44:52.574266','',NULL,NULL,NULL),(458,'34','3',0,'3242355','432243',34.00,'3','MANUAL',NULL,NULL,'https://empoms.s3.amazonaws.com/4b7f3cc9-51da-4485-9cc5-8bb65d55bf9f_Login 2.jpg','ola','fg64545','ENGAGED','TWO_WHEELER',1,'PREMIUM',1,'2024-06-11 11:40:06.542061','',NULL,NULL,NULL),(502,'Lithium-ion','4 hours',0,'XYZ076','50000',10.50,'5','Automatic',NULL,NULL,'https://empoms.s3.amazonaws.com/85a614f2-a8a9-48e3-9591-3eddf619f578_Screenshot 2024-02-15 120647.png','Toyota Camry','ABC903','ENGAGED','FOUR_WHEELER',1,'STANDARD',1,'2024-06-11 11:40:06.542061','CH123806','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/6eeb6512-fa68-408a-9542-395e4c9730ef_Screenshot 2024-02-15 120647.png','400 km'),(558,NULL,NULL,0,'XYZp071','50000',10.50,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/7707223f-55d1-4931-a9c9-cd83141b613b_Screenshot 2024-02-15 120647.png,https://empoms.s3.amazonaws.com/6f9ca034-a9a7-4b31-8d0f-ff346e89aa66_Screenshot 2024-03-06 120954.png','Toyota Camry','ABC117','ENGAGED','FOUR_WHEELER',1,'STANDARD',1,'2024-06-11 11:40:06.542061','CH196717','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/2c732ee2-2e11-4f3a-8ca9-c31bb02baa3f_Screenshot 2024-02-15 120647.png','400 km'),(559,NULL,NULL,0,'XYZu071','50000',10.50,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/b55c6a95-8e75-4829-aa99-a52be6c768bc_Screenshot 2024-02-15 120647.png,https://empoms.s3.amazonaws.com/3795d1c2-dd6b-471a-aef0-741e2bba2bec_Screenshot 2024-03-06 120954.png,https://empoms.s3.amazonaws.com/82b916df-95a7-4f73-af2f-a90cabe34037_Screenshot 2024-03-06 121302.png','Toyota Camry','ABC417','AVAILABLE','FOUR_WHEELER',1,'STANDARD',1,'2024-06-11 17:09:37.422851','CH190717','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/2d0ba84c-2ca9-4392-81d5-d385c8d4079a_Screenshot 2024-02-15 120647.png','400 km'),(560,NULL,NULL,0,'XYZu02171','50000',10.50,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/b30879d5-e60e-4251-9ebf-79cd57861f85_Screenshot 2024-02-15 120647.png,https://empoms.s3.amazonaws.com/20ed3321-9d9b-4596-a3d0-c10875a062e5_Screenshot 2024-03-06 120954.png,https://empoms.s3.amazonaws.com/3dbd785f-a2f1-4cb4-bb51-a8837e150e85_Screenshot 2024-03-06 121302.png','Toyota Camry','ABC2427','AVAILABLE','FOUR_WHEELER',1,'STANDARD',1,'2024-06-11 17:09:37.422851','CH1920717','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/fb86d2f5-7843-4cfe-9a96-a63f410e4da1_Screenshot 2024-02-15 120647.png','400 km'),(562,NULL,NULL,0,'XYZu032171','50000',10.50,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/d4bcc6bd-7e35-4eda-9c51-ac30a88473d0_Screenshot 2024-02-15 120647.png','Toyota Camry','ABC3427','ENGAGED','FOUR_WHEELER',NULL,'STANDARD',1,NULL,'CH19230717','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/642559ca-cebb-4d00-99bc-88ca7d013f41_Screenshot 2024-02-15 120647.png','400 km'),(564,NULL,NULL,0,'XYZu032d171','50000',10.50,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/9f65f242-9aad-4805-a1fc-68133eb43ca1_Screenshot 2024-02-15 120647.png','Toyota Camry','ABCd3427','ENGAGED','FOUR_WHEELER',NULL,'STANDARD',1,NULL,'CH192d30717','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/57c5115b-3e73-4a7b-a2a1-b232de082df1_Screenshot 2024-02-15 120647.png','400 km'),(565,NULL,NULL,0,'fdr654654','555467',656.00,'3',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/e5b6af01-80ca-40fb-b1af-b40b62d10eb1_Screenshot 2024-03-06 121209.png','car ','dhgd6543543','ENGAGED','FOUR_WHEELER',NULL,'PREMIUM',1,NULL,'4646545545','2024-05-15 05:30:00.000000','https://empoms.s3.amazonaws.com/7c09fd1a-396a-405b-9cc3-60985d999e0c_Screenshot 2024-03-06 121209 - Copy.png','100'),(567,NULL,NULL,0,'fdr64654','555467',656.00,'3',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/bb62a693-c0d4-4048-a1d3-2d1b15d6634b_Screenshot 2024-03-06 121209.png','car ','dhgd654543','AVAILABLE','TWO_WHEELER',1,'PREMIUM',1,'2024-06-11 17:33:14.423114','464545545','2024-05-15 05:30:00.000000','https://empoms.s3.amazonaws.com/7b5d9bb0-9809-49f7-bbb1-fc130f6b6837_Screenshot 2024-03-06 121209 - Copy.png','100'),(568,NULL,NULL,0,'XYZu0321d171','50000',10.50,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/7cd7db92-0973-4efa-b6a2-fb84679381c2_Screenshot 2024-02-15 120647.png','Toyota Camry','ABCd34217','ENGAGED','FOUR_WHEELER',1,'STANDARD',1,'2024-06-11 14:31:15.004207','CH192d310717','2024-06-01 05:30:00.000000','https://empoms.s3.amazonaws.com/edbb72a4-2a51-47a3-9766-bc70c83d4e9d_Screenshot 2024-02-15 120647.png','400 km'),(569,NULL,NULL,0,'gd6w54464','543453',56.00,'2',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/5ff011e6-46d5-483a-bd0a-74ba9fdea7e2_Screenshot 2024-03-06 121209.png','Devid Putra','cgd3543554','AVAILABLE','TWO_WHEELER',1,'PREMIUM',1,'2024-06-11 17:33:14.423114','324567563','2024-05-22 05:30:00.000000','https://empoms.s3.amazonaws.com/77dacfd0-fc6f-49c7-8991-54f10212e754_Screenshot 2024-03-06 121209.png','654'),(602,NULL,NULL,0,'54784651676','5788448687',545.00,'3',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/13d652ca-3a2b-4146-81ff-2e20ee1d2be4_Screenshot 2024-03-06 121209 - Copy.png','bugati','ghs654765','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-11 11:59:22.529475','378786567445','2024-05-26 05:30:00.000000','https://empoms.s3.amazonaws.com/94a1d5da-5d83-44aa-80cf-81393993b275_Screenshot 2024-03-06 121209.png','545'),(652,NULL,NULL,0,'654685469','54',54.00,'3',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/e466eba8-3350-4a94-b37d-35560b12a942_Screenshot 2024-03-06 121209 - Copy.png','car','5456466','ENGAGED','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-11 11:59:22.529475','675444','2024-05-27 05:30:00.000000','https://empoms.s3.amazonaws.com/f57fc3e4-9769-41db-b9d4-3b22e40b1729_Screenshot 2024-03-06 121209.png','545'),(702,NULL,NULL,0,'4535gr34535','453453',435.00,'4',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/15aa57f6-c725-4db3-b88b-97d9cda5a1dd_Screenshot 2024-03-06 121209 - Copy.png','car','34gfd554','AVAILABLE','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-11 17:33:14.423114','54345345','2024-05-27 05:30:00.000000','https://empoms.s3.amazonaws.com/5eb873ad-a08e-4bb9-9f4e-a9ac201f7f50_Screenshot 2024-03-06 121209 - Copy.png','324234'),(703,NULL,NULL,0,'56565454','5656',NULL,'3',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/27304c3c-338f-43fd-9451-d036ff556b54_Screenshot 2024-03-06 121209.png,https://empoms.s3.amazonaws.com/0bd945c0-93a3-4731-b540-b515a4ffa596_Screenshot 2024-03-06 121302.png','car1','hf446464f','AVAILABLE','FOUR_WHEELER',1,'PREMIUM',1,'2024-06-11 17:33:14.423114','564546','2024-06-02 05:30:00.000000','https://empoms.s3.amazonaws.com/8201d0fc-a9a6-434c-8261-073bab197a5a_Screenshot 2024-03-06 121209 - Copy.png','564656'),(752,NULL,NULL,0,'4322433','34243343',34.00,'5',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/4f418b28-710c-4125-b7b8-a3b85d278d33_Screenshot 2024-03-06 121034 - Copy.png,https://empoms.s3.amazonaws.com/624ddf4d-5f08-4fe9-94d0-d9abfcd8e22b_Screenshot 2024-03-06 121034.png','bolero','edf34434','ENGAGED','FOUR_WHEELER',1,'STANDARD',1,'2024-06-11 11:59:22.529475','54662356423','2024-05-26 05:30:00.000000','https://empoms.s3.amazonaws.com/598f221b-2f9f-42c7-a453-b0098a8eadb0_Screenshot 2024-03-06 121034 - Copy.png','3243'),(802,NULL,NULL,0,'78613571351','645135',20.00,'3',NULL,NULL,NULL,'https://empoms.s3.amazonaws.com/aed11323-1861-4677-88f5-a3ef05104334_Screenshot 2024-03-06 120954 - Copy.png,https://empoms.s3.amazonaws.com/2cde7745-2165-4d71-879f-def4f8001b5d_Screenshot 2024-03-06 120954.png','swift','cg8764153','MAINTENANCE','FOUR_WHEELER',1,'STANDARD',1,NULL,'6587456567','2024-05-28 05:30:00.000000','https://empoms.s3.amazonaws.com/0fa26f20-fd8e-4182-8ad8-b58ec48dd06b_Screenshot 2024-03-06 121034 - Copy (2).png','400');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
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
