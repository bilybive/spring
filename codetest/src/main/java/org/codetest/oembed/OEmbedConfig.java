package org.codetest.oembed;

public class OEmbedConfig {

	public enum Format {
		json, xml
	}
	
	private static String providerJSONPath = "config/providers.json";
	
	
	public static String getProviderJSONPath() {
		return providerJSONPath;
	}
	
	public static void setProviderPath(String providerPath) {
		providerJSONPath = providerPath;
	}
}
