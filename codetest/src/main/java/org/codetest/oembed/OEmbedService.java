package org.codetest.oembed;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.apache.http.ParseException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class OEmbedService {
	
	public static final Logger LOGGER = LoggerFactory.getLogger(OEmbedService.class.getPackage().getName());

	public String callOEbed(String url) throws URISyntaxException, ParseException, IOException {
		CloseableHttpClient hc = HttpClients.createDefault(); 
		URI uri = this.getEndpointApi(url);
		
		LOGGER.info("endpoint uri => {}",uri.toString());
		
		HttpGet httpGet = new HttpGet(uri); 
		httpGet.addHeader("Content-Type", "application/json"); 
		CloseableHttpResponse httpResponse = hc.execute(httpGet); 
		return EntityUtils.toString(httpResponse.getEntity(), "UTF-8"); 
	}
	
	
	public URI getEndpointApi(final String url) throws URISyntaxException {
		Optional<OEmbedProvider> endpoint = this.findEndpoint(url);
		OEmbedProvider provider = endpoint.get();
		return provider.toApiUrl(url);
	}
	
	private Optional<OEmbedProvider> findEndpoint(final String url) {
		List<OEmbedProvider> providerList = OEmbedUtil.getProviderData(); 
		return providerList.stream()
						.filter(
							endpoint -> endpoint
								.getEndpointSchemes()
								.stream()
								.map(String::trim)
								.anyMatch(url::matches)
						 ).findFirst();
	}
	
	
}
