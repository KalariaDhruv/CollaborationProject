package com.niit.dao;

import java.util.List;

import com.niit.model.Job;

public interface JobDao {
void addJob(Job job);
List<Job> getAlljobs(); 
Job getJob(int id);
}
