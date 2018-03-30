package com.niit.dao;

import java.util.List;

import com.niit.model.BlogPost;

public interface BlogPostDao
{
	void addBlogPost(BlogPost blogPost);
	List<BlogPost> listOfBlogs(int approved);
	BlogPost getBlog(int id);
	void approve(BlogPost blog);
	
	void reject(BlogPost blog,String rejectionReason);
}
