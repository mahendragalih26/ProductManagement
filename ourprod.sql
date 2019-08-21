/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100140
 Source Host           : localhost:3306
 Source Schema         : ourprod

 Target Server Type    : MySQL
 Target Server Version : 100140
 File Encoding         : 65001

 Date: 21/08/2019 21:14:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for outlet
-- ----------------------------
DROP TABLE IF EXISTS `outlet`;
CREATE TABLE `outlet`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `unit` int(11) NULL DEFAULT NULL,
  `branch` varchar(150) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of outlet
-- ----------------------------
INSERT INTO `outlet` VALUES (1, 'Beras', 20, 'Mlati');
INSERT INTO `outlet` VALUES (2, 'Jagung', 100, 'Mlati');
INSERT INTO `outlet` VALUES (3, 'Brokoli', 40, 'Sleman');
INSERT INTO `outlet` VALUES (4, 'Jagung', 40, 'Bantul');
INSERT INTO `outlet` VALUES (5, 'Sawi', 40, 'Bantul');
INSERT INTO `outlet` VALUES (6, 'jagung', 100, 'bamtil');

SET FOREIGN_KEY_CHECKS = 1;
