import discord
# from discord import app_commands
import os

# intents = discord.Intents.default()
# client = discord.Client(intents=intents)
# tree = app_commands.CommandTree(client)

# @tree.command(name = "devangel", description = "ask a dev angel") 
# #Add the guild ids in which the slash command will appear. If it should be in all, remove the argument, but note that it will take some time (up to an hour) to register the command if it's for all guilds.
# async def first_command(interaction):
#     print(interaction)
#     await interaction.response.send_message("Hello! Your question is recorded and will be resolved soon.")

# @client.event
# async def on_ready():
#     await tree.sync()
#     print('We have logged in as {0.user}'.format(client))

# @client.event
# async def on_message(message):
#     if message.author == client.user:
#         return

#     if message.content.startswith('$devangel ask'):
#         await message.channel.send('Got it! Your question will be soon answered by a dev-angel.')

bot = discord.Bot()

devAngel = bot.create_group("devangel", "asking dev-angels")

question_count = 0
answered_count = 0

@bot.event
async def on_ready():
    print(f"{bot.user} is ready and online!")

@devAngel.command(name = "ask", description = "Ask questions to dev-angel")
async def hello(ctx, *, question = ''):
    global question_count
    await ctx.respond("Creating a thread for your question and assigning a dev-angel")
    message = await ctx.send(f" Started : {question}")
    author_id = ctx.author
    print(author_id)
    author = author_id
    experts = ["CarbonCubie#0394", "greenBee#9327"]
    expert_id = experts[0] 
    expert = expert_id
    thread = await message.create_thread(name="Query Thread", auto_archive_duration=60)
    await thread.send(f"Hello {author}, We're soon assigning a dev angel to this thread.")
    await thread.send(f"Welcome, {expert}, \nCan you help {author}")
    question_count = question_count+1

@devAngel.command(name = "summary", description = "summary of interaction with dev-angel")
async def hello(ctx):
    global question_count
    await ctx.respond(f"Hey {ctx.author}! \n**Submitted Questions**: {question_count}\n**Answered Questions**: {answered_count}")


bot.run(os.getenv('TOKEN'))

