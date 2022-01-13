package org.codetest.oembed;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.codetest.oembed.OEmbedConfig.Format;

public class OEmbedProvider {
	
	private String providerName;
	private String providerUrl;
	private String endpointUrl;
	private List<String> endpointSchemes;
	private Format format = Format.json;
	
	private Integer maxWidth;
	private Integer maxHeight;
	
	public String getProviderName() {
		return providerName;
	}
	public void setProviderName(String providerName) {
		this.providerName = providerName;
	}
	public String getProviderUrl() {
		return providerUrl;
	}
	public void setProviderUrl(String providerUrl) {
		this.providerUrl = providerUrl;
	}
	public String getEndpointUrl() {
		return endpointUrl;
	}
	public void setEndpointUrl(String endpointUrl) {
		this.endpointUrl = endpointUrl;
	}
	public List<String> getEndpointSchemes() {
		return endpointSchemes;
	}
	public void setEndpointSchemes(List<String> endpointSchemes) {
		this.endpointSchemes = endpointSchemes;
	}
	public Format getFormat() {
		return format;
	}
	public void setFormat(Format format) {
		this.format = format;
	}
	public Integer getMaxWidth() {
		return maxWidth;
	}
	public void setMaxWidth(Integer maxWidth) {
		this.maxWidth = maxWidth;
	}
	public Integer getMaxHeight() {
		return maxHeight;
	}
	public void setMaxHeight(Integer maxHeight) {
		this.maxHeight = maxHeight;
	}
	
	public URI toApiUrl(final String url) throws URISyntaxException {
		String uri;
		final List<NameValuePair> query = new ArrayList<>();

		if (this.getEndpointUrl().toLowerCase().contains("{format}")) {
			uri = this.getEndpointUrl().replaceAll(Pattern.quote("{format}"), this.getFormat().toString());
		} else {
			uri = this.getEndpointUrl();
			query.add(new BasicNameValuePair("format", this.getFormat().toString()));
		}
		query.add(new BasicNameValuePair("url", url));
		if (this.getMaxWidth() != null) {
			query.add(new BasicNameValuePair("maxwidth", this.getMaxWidth().toString()));
		}
		if (this.getMaxHeight() != null) {
			query.add(new BasicNameValuePair("maxheight", this.getMaxHeight().toString()));
		}

		return new URIBuilder(uri).addParameters(query).build();
	}
}
