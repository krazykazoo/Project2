package com.revature.util;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//Cross-origin Resource Sharing (CORS) is a mechanism that allows JavaScript on a web page to make
//AJAX requests to another domain, different from the domain where it originated

//implement and include w/ steps below, also be sure to include dependency
//and filter mapping in web.xml

public class CORSFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest)servletRequest;
        HttpServletResponse res = (HttpServletResponse) servletResponse;

        //outer if is to avoid null pointer
        if(req.getHeader("origin") != null) {
            //authorize localhost:4200 (angular serve) to consume the content
            if (req.getHeader("origin").equals("http://localhost:4200")) {
                res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
                res.setHeader("Access-Control-Allow-Method", "OPTION GET POST PUT DELETE");
                res.setHeader("Access-Control-Allow-Headers", "Content-Type");
                System.out.println("CORS filter received => access from localhost:4200");
            }
        }

        //authorize (allow) all domains to consume the content
        if(req.getMethod().equals("OPTION")) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Method", "OPTION GET POST PUT DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type Authorization, Location");
            System.out.println("CORS request received");
        }


        //pass the request along filter chain
        filterChain.doFilter(req, res);
    }

    @Override
    public void destroy() {

    }
}

