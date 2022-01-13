package org.codetest.oembed;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.core.io.ClassPathResource;

public class OEmbedUtil {

	static private List<OEmbedProvider> providerDataList = null;
	
	static {
		try {
			providerDataList = OEmbedUtil.genProviderData();
		} catch (IOException | ParseException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * provider.json 파일을 읽어 OEmbedProvider Collection을 생성한다.
	 * @return List<OEmbedProvider>
	 * @throws IOException
	 * @throws ParseException 
	 */
	private static List<OEmbedProvider> genProviderData() throws IOException, ParseException {
		List<OEmbedProvider> providerList = new ArrayList<>();
		JSONParser jsonParser = new JSONParser();
		String providerPath = OEmbedConfig.getProviderJSONPath(); // config/provider.json
		ClassPathResource classPathResource = new ClassPathResource(providerPath); 
		BufferedReader rd = new BufferedReader(new InputStreamReader(classPathResource.getInputStream()));
		
		Object obj = jsonParser.parse(rd);
		JSONArray jsonArr = (JSONArray) obj;
		for (int i = 0; i < jsonArr.size(); i++) {
			OEmbedProvider provider = new OEmbedProvider();
			JSONObject providerJSON = (JSONObject) jsonArr.get(i);
			String provider_name    = (String) providerJSON.get("provider_name");
			String provider_url     = (String) providerJSON.get("provider_url");
			String endpoints        = providerJSON.get("endpoints").toString(); 
			JSONArray endpointsJSON = (JSONArray) jsonParser.parse(endpoints);
			JSONObject endpoint     = (JSONObject) endpointsJSON.get(0);
			String endpointUrl      = (String) endpoint.get("url");
			JSONArray schemes       = (JSONArray)endpoint.get("schemes");
			
			List<String> endpointSchemes = new ArrayList<String>();
			for (Object object : schemes) {
				String schema = (String) object;
				endpointSchemes.add(schema);
			}
			
			provider.setProviderName(provider_name);
			provider.setProviderUrl(provider_url);
			provider.setEndpointUrl(endpointUrl);
			provider.setEndpointSchemes(endpointSchemes);
			providerList.add(provider);
		}
		
		return providerList;
	}
	
	
	public static List<OEmbedProvider> getProviderData() {
		return providerDataList;
	}
	

}
