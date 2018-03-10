package com.niit.dao;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.Job;

@Repository
@Transactional
public class JobDaoImpl implements JobDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public void addJob(Job job) 
	{
		Session session=sessionFactory.getCurrentSession();
		System.out.println(job.getJobTitle());
		System.out.println(job.getJobDescription());
		System.out.println(job.getSkillRequired());
		System.out.println(job.getLocation());
		System.out.println(job.getSalary());
		System.out.println(job.getCompanyName());
		System.out.println(job.getYrsOfExp());
		session.save(job);
		
	}

	public List<Job> getAlljobs() {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from Job");
		return query.list();
	}

	public Job getJob(int id) {
		Session session=sessionFactory.getCurrentSession();
		Job job =(Job)session.get(Job.class, id);
		return job;
	}
	
	
	

}
