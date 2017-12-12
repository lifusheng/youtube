-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-12-12 13:15:18
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `move`
--

-- --------------------------------------------------------

--
-- 表的结构 `t_user`
--

CREATE TABLE IF NOT EXISTS `t_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `pwd` varchar(132) DEFAULT NULL,
  `userid` varchar(15) NOT NULL COMMENT '学员id',
  `subname` varchar(30) NOT NULL COMMENT '学员昵称',
  `pic` varchar(50) NOT NULL DEFAULT 'default.jpg' COMMENT '学员头像',
  `regtime` bigint(20) DEFAULT NULL,
  `lasttime` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=100032 ;

--
-- 转存表中的数据 `t_user`
--

INSERT INTO `t_user` (`id`, `name`, `pwd`, `userid`, `subname`, `pic`, `regtime`, `lasttime`) VALUES
(1, 'test01', '123456', '1243532452', '呵呵哒', 'default.jpg', 20171211000000, NULL),
(100018, '王小二', '123456', '1513061111042', '', '', 0, 0),
(100019, 'hahaha', 'a12345', '1513064475134', '', '', 0, 0),
(100023, 'test03', '$2a$10$ENNs.HYSi7tbsw0iN6xegeCMD', '1513068254644', '', '', 1513068254644, 0),
(100024, 'test04', '$2a$10$gzfxzkKU0vRTdzppTZSAfu6hK', '1513068483093', '', '', 1513068483093, 0),
(100025, 'test05', '$2a$10$1/6upyFsffegSestfOgvM.y5b', '1513070835560', '', '', 1513070835560, 0),
(100026, 'test06', '$2a$10$f5J6TrGbiAjMOCC0zOOCoOJep', '1513071688677', '', '', 1513071688677, 0),
(100027, 'test07', '$2a$10$apqWJo5Dik435PfsV4gtOesri', '1513071756936', '', '', 1513071756936, 0),
(100028, 'test08', '$2a$10$24Td0RdYhsnDxaUvGrQIJ.X5z', '1513071775835', '', '', 1513071775835, 0),
(100029, 'test09', '$2a$10$svLbU2Jyt89JukD1s7XM1uXem', '1513073670615', '', '', 1513073670615, 0),
(100030, 'test001', '$2a$10$RhVP7UW1DwjpH4kLfeoFb.r/z', '1513074913066', '', '', 1513074913066, 0),
(100031, 'test002', '$2a$10$kacRcvX.EkBZ4hPj4jypn.n3AoILNSjAmv0qywpCukusP4.Vy3j7K', '1513075288375', '', '', 1513075288375, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
