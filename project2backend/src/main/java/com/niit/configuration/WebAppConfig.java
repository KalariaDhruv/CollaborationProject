package com.niit.configuration;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//dispatcher-servlet.xml file configuration in project 1
// <mvc:annotation-driven> , <component-scan> , <bean class="..InternalResourceViewResolver"> 
@Configuration
@EnableWebMvc
@ComponentScan(basePackages="com.niit")
public class WebAppConfig extends WebMvcConfigurerAdapter{
    public WebAppConfig(){
    	System.out.println("WebAppConfig is instantiated");
    }
}
