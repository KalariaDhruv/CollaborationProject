package com.niit.dao;

import java.util.List;

import com.niit.model.Notification;

public interface NotificationDao {

	List<Notification> getNotificationsNotViewed(String email);

	Notification getNotification(int id);

	void updateNotification(int id);
}
