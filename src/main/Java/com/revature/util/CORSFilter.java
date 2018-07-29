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

        //authorize (allow) all domains to consume the content
        if(req.getMethod().equals("OPTION")) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Method", "OPTION GET POST PUT DELETE");
            res.setHeader("Access-Control-Allow-Header", "Content-Type Authorization, Location");
            System.out.println("CORS request received");
        }


        //pass the request along filter chain
        filterChain.doFilter(req, res);
    }

    @Override
    public void destroy() {

    }
}

