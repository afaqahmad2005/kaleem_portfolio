-- App User: CRUD on core tables, but cannot see passwords or delete users.
GRANT SELECT, INSERT, UPDATE, DELETE ON SmartHomePlatform.Device TO 'app_user'@'localhost';
GRANT SELECT, INSERT, UPDATE ON SmartHomePlatform.Schedule TO 'app_user'@'localhost';
GRANT SELECT, INSERT ON SmartHomePlatform.Notification TO 'app_user'@'localhost';
-- Explicitly DENY access to sensitive columns (simulate via view)
REVOKE SELECT (wifi_password) ON SmartHomePlatform.Home FROM 'app_user'@'localhost';

-- Admin User: Full control over user roles, but not system tables.
GRANT ALL PRIVILEGES ON SmartHomePlatform.UserRole TO 'admin_user'@'localhost';
GRANT SELECT, INSERT, UPDATE ON SmartHomePlatform.User TO 'admin_user'@'localhost';

-- Reporting User: Read-only access to all tables (for generating analytics).
GRANT SELECT ON SmartHomePlatform.* TO 'reporting_user'@'localhost';

-- Guest User: Only read device status in a specific home (using a view is better).
CREATE VIEW GuestHomeView AS
SELECT d.device_name, d.status, h.home_name
FROM Device d
JOIN Home h ON d.home_id = h.home_id
WHERE h.owner_user_id = 1; -- Restrict to one user's homes
GRANT SELECT ON SmartHomePlatform.GuestHomeView TO 'guest_user'@'localhost';