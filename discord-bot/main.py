import discord
from discord import app_commands
import os

intents = discord.Intents.default()
client = discord.Client(intents=intents)
tree = app_commands.CommandTree(client)

@tree.command(name = "devangel", description = "ask a dev angel") 
#Add the guild ids in which the slash command will appear. If it should be in all, remove the argument, but note that it will take some time (up to an hour) to register the command if it's for all guilds.
async def first_command(interaction):
    print(interaction)
    await interaction.response.send_message("Hello! Your question is recorded and will be resolved soon.")

@client.event
async def on_ready():
    await tree.sync()
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$devangel ask'):
        await message.channel.send('Got it! Your question will be soon answered by a dev-angel.')

client.run(os.getenv('TOKEN'))

