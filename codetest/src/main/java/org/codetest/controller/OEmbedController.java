package org.codetest.controller;

import org.codetest.oembed.OEmbedService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class OEmbedController {
	
	public static final Logger LOGGER = LoggerFactory.getLogger(OEmbedController.class.getPackage().getName());
	
	@Autowired
	private OEmbedService oEmbedService;

	@GetMapping("/oembed")
	@ResponseBody 
	public String oembedResponse(@RequestParam("userUrlData") String userUrlData) throws Exception { 
		LOGGER.info("request url => {}",userUrlData);
		return oEmbedService.callOEbed(userUrlData); 
	}

}
