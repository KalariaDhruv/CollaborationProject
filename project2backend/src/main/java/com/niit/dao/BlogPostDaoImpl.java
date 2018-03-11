package com.niit.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.BlogPost;

@Repository
@Transactional
public class BlogPostDaoImpl implements BlogPostDao
{
	@Autowired
	public SessionFactory sessionFactory;
	
	public void addBlogPost(BlogPost blogPost) {
		Session session=sessionFactory.getCurrentSession();
		session.save(blogPost);
		
	}
	public List<BlogPost> listOfBlogs(int approved) {
		Session session=sessionFactory.getCurrentSession();
		Query query=session.createQuery("from BlogPost where approved="+approved);
		List<BlogPost> blogs=query.list();
		return blogs;
	}
	public BlogPost getBlog(int id) {
		Session session=sessionFactory.getCurrentSession();
		BlogPost blogPost=(BlogPost)session.get(BlogPost.class, id);
		return blogPost;
	}
	public void approve(BlogPost blog) {
		Session session =sessionFactory.getCurrentSession();
		blog.setApproved(true);
		session.update(blog);
		
		
	}
	public void reject(BlogPost blog) {
		Session session =sessionFactory.getCurrentSession();
		session.delete(blog);
		
	}
	
}