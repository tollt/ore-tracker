const { SlashCommandBuilder, EmbedBuilder, ApplicationIntegrationType} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("r1-tracker")
		.setDescription("Create a tracker embed for mm2")
		.setIntegrationTypes([ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall])
		.addStringOption(option =>
			option.setName("player")
			.setRequired(true)
			.setDescription("player who found it")
		)
		.addStringOption(option => 
			option.setName("pickaxe")
			.setRequired(true)
			.setDescription("Which Pickaxe")
		)
		.addBooleanOption(option =>
			option.setName("2x-luck")
			.setRequired(true)
			.setDescription("Whether or not it is a luck pickaxe")
		)
		.addStringOption(option => 
			option.setName("rank")
			.setRequired(true)
			.setDescription("Which rank")
			.addChoices(
				{"name": "Twilistar Miner", "value":"Twilistar Miner"},
				{"name": "Antimony Miner", "value":"Antimony Miner"},
				{"name": "Hazenite Miner", "value":"Hazenite Miner"},
				{"name": "Gadolinium Miner", "value":"Gadolinium Miner"},
				{"name": "Xanthiosite Miner", "value":"Xanthiosite Miner"},
				{"name": "Somnium Miner", "value":"Somnium Miner"},
				{"name": "Yunium Miner", "value":"Yunium Miner"},
				{"name": "Pyroberyl Miner", "value":"Pyroberyl Miner"},
				{"name": "Samarium Miner", "value":"Samarium Miner"},
				{"name": "Alcyoneum Miner", "value":"Alcyoneum Miner"},
				{"name": "Tenebris Miner", "value":"Tenebris Miner"},
				{"name": "Osmium Miner", "value":"Osmium Miner"},
				{"name": "Ireminite Miner", "value":"Ireminite Miner"},
				{"name": "Zenibrum Miner", "value":"Zenibrum Miner"},
				{"name": "Quartz Miner", "value":"Quartz Miner"},
				{"name": "Leucophanite Miner", "value":"Leucophanite Miner"},
				{"name": "Glaucochroite Miner", "value":"Glaucochroite Miner"},
				{"name": "Hydromagnesite Miner", "value":"Hydromagnesite Miner"},
				{"name": "Nephrite Miner", "value":"Nephrite Miner"},
				{"name": "Francium Miner", "value":"Francium Miner"},
				{"name": "Aragonite Miner", "value":"Aragonite Miner"},
				{"name": "Tanzanite Miner", "value":"Tanzanite Miner"},
				{"name": "Obsidian Miner", "value":"Obsidian Miner"},
				{"name": "Palladium Miner", "value":"Palladium Miner"},
				{"name": "Serpentine Miner", "value":"Serpentine Miner"},
				// {"name": "Carnelian Miner", "value":"Carnelian Miner"},
				// {"name": "Lepidolite Miner", "value":"Lepidolite Miner"},
				// {"name": "Malachite Miner", "value":"Malachite Miner"},
				// {"name": "Amethyst Miner", "value":"Amethyst Miner"},
				// {"name": "Diamond Miner", "value":"Diamond Miner"},
				// {"name": "Iron Miner", "value":"Iron Miner"},
				// {"name": "Coal Miner", "value":"Coal Miner"},
				// {"name": "Stone Miner", "value":"Stone Miner"},
				// {"name": "Miner", "value":"Miner"},
			)
		).addStringOption(option =>
            option.setName("ore1")
            .setDescription("Which ore")
			.addChoices(
				{"name" : "Glitched", "value" : "Glitched|10|55ff00"},
				{"name" : "Inferos", "value" : "Inferos|20|ffc002"},
				{"name" : "Occultatum", "value" : "Occultatum|30|01ffe1"},
				{"name" : "Fracture", "value" : "Fracture|40|ff0ad2"},
				{"name" : "Malware", "value" : "Malware|50|c20000"},
				{"name" : "Hollow", "value" : "Hollow|60|48107f"},
				{"name" : "Eternal", "value" : "Eternal|70|ff55ff"},
				{"name" : "Origin", "value" : "Origin|80|74fccc"},
				{"name" : "Prismatic", "value" : "Prismatic|90|a5f8ff"},
				{"name" : "Complex", "value" : "Complex|100|0000ff"},
				{"name" : "Antimatter", "value" : "Antimatter|200|befffb"},
				{"name" : "Illusion", "value" : "Illusion|300|d10000"},
				{"name" : "Dark Matter", "value" : "Dark Matter|400|8a15ff"},
				{"name" : "Cryptic", "value" : "Cryptic|500|154100"},
				{"name" : "Vortex", "value" : "Vortex|600|0084ff"},
				{"name" : "No Texture", "value" : "No Texture|700|ff00ff"},
				{"name" : "Creation", "value" : "Creation|800|ff70ff"},
				{"name" : "Destruction", "value" : "Destruction|900|560b06"},
				{"name" : "Eden", "value" : "Eden|1000|53e5bc"},
			)
		)
		.addStringOption(option =>
			option.setName("ore2")
			.setDescription("Which ore")
			.addChoices(			
				{"name" : "Motherboard", "value" : "Motherboard|10.5|00d6d3"},
				{"name" : "Obscurus", "value" : "Obscurus|12.5|2c2c2c"},
				{"name" : "Stabilibrite", "value" : "Stabilibrite|15|ffff7f"},
				{"name" : "Flerovium", "value" : "Flerovium|25|7601d0"},
				{"name" : "Duality", "value" : "Duality|35|ff230f"},
				{"name" : "Codex", "value" : "Codex|45|06ef09"},
				{"name" : "Starglass", "value" : "Starglass|55|19e0e1"},
				{"name" : "Vexnium", "value" : "Vexnium|65|f9ff8b"},
				{"name" : "Enigma", "value" : "Enigma|75|1d7501"},
				{"name" : "Serenity", "value" : "Serenity|85|cc7af9"},
				{"name" : "Spirit", "value" : "Spirit|95|00e5a3"},
				{"name" : "Strange Matter", "value" : "Strange Matter|150|37d700"},
				{"name" : "Cosmic", "value" : "Cosmic|250|e585f3"},
				{"name" : "Charm", "value" : "Charm|350|ff4f19"},
				{"name" : "Solar Rift", "value" : "Solar Rift|450|faea04"},
				{"name" : "Sentience", "value" : "Sentience|550|ece70c"},
				{"name" : "Wormhole", "value" : "Wormhole|650|064c92"},
				{"name" : "Quintessence", "value" : "Quintessence|750|c9c8ff"},
				{"name" : "Supernova", "value" : "Supernova|850|fe4401"},
				{"name" : "Pulsar", "value" : "Pulsar|950|13acff"},
			)
		)
		,


	async execute(interaction) {
		const ore1 = interaction.options.getString("ore1")
		const ore2 = interaction.options.getString("ore2")
		if (ore1 && ore2){
			await interaction.reply("Format error: 2 ores given");
			return;
		}
		else if (!ore1 && !ore2)
		{
			await interaction.reply("Format error: ore missing");
			return;
		}
		const ore = ore1 ?? ore2
		oreEmbed = new EmbedBuilder()
		.setTitle(`${interaction.options.getString("player")} has found ${ore.split("|")[0]}`)
        .setColor(ore.split("|")[2])
		.addFields(
			{ name: "Rarity", value: "1 out of " + (parseFloat(ore.split("|")[1]) / (interaction.options.getBoolean("2x-luck") + 1)).toFixed(2) + "M" , inline: true},
			{ name: "Pickaxe", value: interaction.options.getString("pickaxe"), inline: true },
			{ name: "Rank", value: interaction.options.getString("rank"), inline: true },
		);
		await interaction.reply({"embeds": [oreEmbed]});
	},
};