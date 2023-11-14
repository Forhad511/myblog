-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2023 at 04:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inflexionpointbd`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` text DEFAULT NULL,
  `short_massage` text DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `image`, `short_massage`, `long_description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'New', 'upload/blog/image/GIGABYTE GA-J1800M-D3P-2-500x500.jpg', 'My News', '<p><div class=\"ULSxyf\" style=\"margin-bottom: 44px; color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"MjjYud\"><div jscontroller=\"SC7lYd\" class=\"g Ww4FFb vt6azd tF2Cxc asEBEc\" lang=\"en\" jsaction=\"QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c\" data-hveid=\"CB8QAA\" data-ved=\"2ahUKEwinvJLht8OCAxXPXmwGHcvQC28QFSgAegQIHxAA\" style=\"font-family: arial, sans-serif; font-size: 14px; line-height: 1.58; text-align: left; width: 600px; margin: 0px 0px 30px; position: relative; background-color: rgb(255, 255, 255); border-radius: 0px;\"><div class=\"N54PNb BToiNc cvP2Ce\" data-snc=\"ih6Jnb_PaWJve\" style=\"display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; flex-direction: column; -webkit-box-pack: start; justify-content: start; position: relative; contain: layout paint; overflow: hidden;\"><div class=\"kb0PBd cvP2Ce jGGQ5e\" data-snf=\"x5WNvb\" data-snhf=\"0\" style=\"contain: layout paint; overflow: hidden; display: block; flex: 0 0 auto;\"><div class=\"yuRUbf\" style=\"font-weight: normal; font-size: small; line-height: 1.58;\"></div></div></div></div></div></div></p><div class=\"ULSxyf\" style=\"margin-bottom: 44px; color: rgb(32, 33, 36); font-family: arial, sans-serif; font-size: medium; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;\"><div class=\"MjjYud\"><div jscontroller=\"SC7lYd\" class=\"g Ww4FFb vt6azd tF2Cxc asEBEc\" lang=\"en\" jsaction=\"QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c\" data-hveid=\"CCwQAA\" data-ved=\"2ahUKEwinvJLht8OCAxXPXmwGHcvQC28QFSgAegQILBAA\" style=\"font-family: arial, sans-serif; font-size: 14px; line-height: 1.58; text-align: left; width: 600px; margin: 0px 0px 30px; position: relative; background-color: rgb(255, 255, 255); border-radius: 0px;\"><div class=\"N54PNb BToiNc cvP2Ce\" data-snc=\"ih6Jnb_Cmhhac\" style=\"display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; flex-direction: column; -webkit-box-pack: start; justify-content: start; position: relative; contain: layout paint; overflow: hidden;\"><div class=\"kb0PBd cvP2Ce jGGQ5e\" data-snf=\"x5WNvb\" data-snhf=\"0\" style=\"contain: layout paint; overflow: hidden; display: block; flex: 0 0 auto;\"><div class=\"yuRUbf\" style=\"font-weight: normal; font-size: small; line-height: 1.58;\"><div><span jscontroller=\"msmzHf\" jsaction=\"rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc\"><a jsname=\"UWckNb\" href=\"https://shouts.dev/articles/laravel-10-image-validation-rule-example\" data-ved=\"2ahUKEwinvJLht8OCAxXPXmwGHcvQC28QFnoECBcQAQ\" ping=\"/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://shouts.dev/articles/laravel-10-image-validation-rule-example&amp;ved=2ahUKEwinvJLht8OCAxXPXmwGHcvQC28QFnoECBcQAQ\" target=\"_blank\" rel=\"noopener\" style=\"color: rgb(26, 13, 171); text-decoration: underline; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); outline: 0px;\"><h3 class=\"LC20lb MBeuO DKV0Md\" style=\"font-weight: 400; margin: 18px 0px 3px; padding: 5px 0px 0px; font-size: 20px; line-height: 1.3; font-family: arial, sans-serif; display: inline-block; text-decoration: underline;\">Laravel 10 Image Validation Rule Example</h3><div class=\"notranslate TbwUpd NJjxre iUh30 ojE3Fb\" style=\"font-size: 12px; line-height: 1.3; padding: 0px; display: flex; text-size-adjust: none; position: absolute; left: 0px; top: 0px; align-items: center;\"><span class=\"H9lube\" style=\"background-color: rgb(241, 243, 244); border: 1px solid rgb(236, 237, 239); border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; height: 26px; width: 26px; margin-right: 12px; vertical-align: middle;\"><div class=\"eqA2re NjwKYd Vwoesf\" aria-hidden=\"true\" style=\"vertical-align: middle; margin-right: 0px; display: inline-block;\"><img class=\"XNo5Ab\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhISHExMT////V1dX09PSPj4+4uLjl5eUAAABNTU0AAAB6enqlpaVhYWE6Ojpe2MP0AAAAFXRSTlMAS5TJ7PgVpf8O//////////9P/8svDrjTAAAA+0lEQVR4AWzSURKDIAwEUEqxrrKCVLG9/0nroKQZ9H34lTHJBqM87NN1nXvah7nx6qH0L9OwaFijDQ4XblC/xy1pM0DDiKr+w0Hx3E1HkbuZL7CIMmnTYOZBN+mhcBcSg+SxF0CJ3MHTozLm3Xbw8Iyo3sa2BTPgFxXo2u4wQ1t1CJhKBtCc6ZoRzw0yDp0qGMmYzgw2XwtUi8RUgv4AC5O0kCE3sny44UtZdJU1v2QGMslpUatYCSqU+DILr4IycoVFFlFR/I8VONUkIkT/P/eHTHFWty4G9WAyT1v7tCWKLZBMGcJdH+0IbfiNYLInnHEIZz3CmZdg9gcAUvQdj1Am4RYAAAAASUVORK5CYII=\" alt=\"\" data-atf=\"4\" data-frt=\"0\" style=\"display: block; height: 18px; width: 18px;\"></div></span><div><span class=\"VuuXrf\" style=\"color: rgb(32, 33, 36); font-size: 14px; display: block; line-height: 20px; white-space: nowrap;\">Shouts.dev</span><div class=\"byrV5b\" style=\"-webkit-box-align: center; align-items: center; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row;\"><cite class=\"qLRx3b tjvcx GvPZzd cHaqb\" role=\"text\" style=\"color: rgb(77, 81, 86); font-style: normal; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; line-height: 18px;\">https://shouts.dev<span class=\"dyjrff ob9lvb\" role=\"text\" style=\"color: rgb(77, 81, 86);\"><span>&nbsp;</span>› articles › laravel-10-image-validati...</span></cite></div></div></div></a></span><div class=\"B6fmyf byrV5b Mg1HEd\" style=\"-webkit-box-align: center; align-items: center; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row; position: absolute; top: 0px; height: auto; visibility: hidden; white-space: nowrap;\"><div class=\"TbwUpd iUh30 ojE3Fb\" style=\"font-size: 12px; line-height: 1.3; padding: 0px; display: flex; text-size-adjust: none; align-items: center;\"><span class=\"H9lube\" style=\"background-color: rgb(241, 243, 244); border: 1px solid rgb(236, 237, 239); border-radius: 50%; display: inline-flex; justify-content: center; align-items: center; height: 26px; width: 26px; margin-right: 12px; vertical-align: middle;\"><div class=\"eqA2re NjwKYd\" style=\"margin-right: 0px; height: 18px; width: 18px;\"></div></span><div><span class=\"VuuXrf\" style=\"color: rgb(32, 33, 36); font-size: 14px; display: block; line-height: 20px; white-space: nowrap;\"></span><div class=\"byrV5b\" style=\"-webkit-box-align: center; align-items: center; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; flex-direction: row;\"><cite class=\"qLRx3b tjvcx GvPZzd cHaqb\" role=\"text\" style=\"color: rgb(77, 81, 86); font-style: normal; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; line-height: 18px;\"><span class=\"dyjrff ob9lvb\" role=\"text\" style=\"color: rgb(77, 81, 86);\"></span></cite></div></div></div><div class=\"csDOgf BCF2pd ezY6nb L48a4c\" style=\"display: inline; visibility: visible; margin-left: 8px; position: relative; height: 18px; margin-top: 16px;\"><div jscontroller=\"exgaYe\" data-bsextraheight=\"0\" data-isdesktop=\"true\" data-movewtractions=\"true\" jsdata=\"l7Bhpb;_;CjPmtY cECq7c;_;CjPmtc\" data-ved=\"2ahUKEwinvJLht8OCAxXPXmwGHcvQC28Q2esEegQIFxAJ\"><div role=\"button\" tabindex=\"0\" jsaction=\"RvIhPd\" jsname=\"I3kE2c\" class=\"iTPLzd rNSxBe lUn2nc\" aria-label=\"About this result\" style=\"padding-bottom: 20px; padding-right: 12px; cursor: pointer; top: 0px; line-height: 16px; left: 0px; width: 28px; z-index: 1; outline: 0px; position: absolute;\"><span jsname=\"czHhOd\" class=\"D6lY4c mBswFe\" style=\"height: 22px; width: 22px; position: absolute; border-radius: 11px;\"><span jsname=\"Bil8Ae\" class=\"xTFaxe z1asCe\" style=\"display: inline-block; fill: currentcolor; height: 18px; line-height: 18px; position: relative; width: 18px; top: 2px; color: rgb(77, 81, 86);\"><svg focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></svg></span></span></div><span jsname=\"zOVa8\" data-ved=\"2ahUKEwinvJLht8OCAxXPXmwGHcvQC28Qh-4GegQIFxAK\"></span></div></div></div></div></div></div><div class=\"kb0PBd cvP2Ce\" data-sncf=\"1\" data-snf=\"nke7rc\" style=\"contain: layout paint; overflow: hidden; display: block; flex: 0 0 auto;\"><div class=\"VwiC3b yXK7lf lyLwlc yDYNvb W8l4ac lEBKkf\" style=\"padding-top: 0px; margin-bottom: 0px; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; color: rgb(77, 81, 86); -webkit-line-clamp: 2;\"><span class=\"lhLbod gEBHYd\" style=\"padding-top: 0px; margin-bottom: 0px; color: rgb(112, 117, 122);\"><span>Sep 23, 2023</span><span>&nbsp;</span>—<span>&nbsp;</span></span><span>This tutorial will give you an example of<span>&nbsp;</span><em style=\"font-weight: bold; font-style: normal; color: rgb(95, 99, 104);\">laravel 10 image validation</em><span>&nbsp;</span>rules. In<span>&nbsp;</span><em style=\"font-weight: bold; font-style: normal; color: rgb(95, 99, 104);\">Laravel 10</em>, you can easily<span>&nbsp;</span><em style=\"font-weight: bold; font-style: normal; color: rgb(95, 99, 104);\">validate image</em><span>&nbsp;</span>sizes. There\'s also a&nbsp;...</span></div></div><div class=\"kb0PBd cvP2Ce\" data-sncf=\"2\" data-snf=\"mCCBcf\" style=\"contain: layout paint; overflow: hidden; display: block; flex: 0 0 auto;\"><div class=\"fG8Fp uo4vr\" style=\"color: rgb(112, 117, 122); line-height: 1.58;\"></div></div></div></div></div></div>', 1, '2023-11-14 06:28:29', '2023-11-14 08:36:58'),
(3, 'Update', 'upload/blog/image/GIGABYTE GA-J1800M-D3P-1-500x500.jpg', 'hjasdjkdfhasjkhdjkashdjkash', '<p>adkljahdjkhasjkdhakjdh</p><p>djaskldjl;sakd\\</p><p>aDKLJASKDJSKAL</p>', 1, '2023-11-14 09:29:30', '2023-11-14 09:29:30'),
(4, 'hsjkdhajkshdjkahJS', 'upload/blog/image/design.png', 'SAJKHDFJKSAHDJKHSAJKDH', '<p>sjkndfjkasnjkfnasjkdjkasndjkasdjk</p>', 1, '2023-11-14 09:41:00', '2023-11-14 09:41:00');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2022_10_26_133431_create_roles_table', 1),
(7, '2022_10_26_133512_create_role_routes_table', 1),
(8, '2022_10_30_144110_create_user_role_table', 1),
(9, '2023_05_11_093128_create_sessions_table', 1),
(10, '2023_11_14_072328_create_blogs_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'ADMIN', 'manage all issue', '2023-11-13 06:33:57', '2023-11-13 06:33:57'),
(2, 'sdfsd', 'sdd', '2023-11-14 05:43:52', '2023-11-14 05:43:52');

-- --------------------------------------------------------

--
-- Table structure for table `role_routes`
--

CREATE TABLE `role_routes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `route_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_routes`
--

INSERT INTO `role_routes` (`id`, `role_id`, `role_name`, `route_name`, `created_at`, `updated_at`) VALUES
(1, 1, 'ADMIN', 'role.add', '2023-11-13 06:33:57', '2023-11-13 06:33:57'),
(2, 1, 'ADMIN', 'role.new', '2023-11-13 06:33:57', '2023-11-13 06:33:57'),
(3, 1, 'ADMIN', 'role.manage', '2023-11-13 06:33:57', '2023-11-13 06:33:57'),
(4, 2, 'sdfsd', 'contact', '2023-11-14 05:43:52', '2023-11-14 05:43:52');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('vziBcYnhf2XW8MO9qEbLTtO7fscL9VMVtNGqE4Hq', 1, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiTHdJOUhRZ1ZQdlhud2JERndLWENNME0xS0tMZWE0OEZWaEVDT09UQSI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjUwOiJodHRwOi8vbG9jYWxob3N0L2luZmxleGlvbnBvaW50YmQvcHVibGljL2Rhc2hib2FyZCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE7czoyMToicGFzc3dvcmRfaGFzaF9zYW5jdHVtIjtzOjYwOiIkMnkkMTAkQjJ0cmJVcWRrVTNvTHBTay9lQU9wLjBjWEtwZGNtR25XTTJmYUguU1Fmd2JsaXBacGNhajYiO30=', 1699976623);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `user_type` tinyint(4) NOT NULL DEFAULT 0,
  `image` text DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `mobile`, `user_type`, `image`, `status`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'MD FORHAD HOSSAIN', 'forhadpatwary342@gmail.com', NULL, '$2y$10$B2trbUqdkU3oLpSk/eAOp.0cXKpdcmGnWM2faH.SQfwblipZpcaj6', NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, '2023-11-13 06:32:31', '2023-11-13 06:32:31'),
(2, 'Raiyen', 'raiyen@gmail.com', NULL, '$2y$10$hqE3wXzcHaCYHxC9als2dOQX3Ah3fvfm2TWmdO4HFhRs9jl5zOjZi', NULL, NULL, NULL, NULL, 0, NULL, 1, NULL, NULL, NULL, '2023-11-14 01:09:53', '2023-11-14 01:09:53');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_title_unique` (`title`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_routes`
--
ALTER TABLE `role_routes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `role_routes`
--
ALTER TABLE `role_routes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
