// 切 - 故事数据
window.GAME_CONFIG = {
  title: "切",
  id: "qie",
  homeUrl: "../",
  typeSpeed: 50,
  endings: ["just_sleep", "learn_coding", "ask_parents", "frugal"],
  sceneTree: {
    start: ["keep_working", "quit"],
    keep_working: ["just_sleep", "learn_coding"],
    quit: ["ask_parents", "frugal"]
  },
  sceneNames: {
    start: "开始", keep_working: "继续打工", quit: "辞职",
    just_sleep: "钝刀", learn_coding: "丰饶的荒漠", ask_parents: "笼", frugal: "饿殍"
  }
};

window.GAME_STORY = {
  start: {
    text: {
      zh: [
        "凌晨3:45。闹钟响了。",
        "你在黑暗中摸到手机，关掉闹钟。屏幕的光刺得你眯起眼睛。",
        "又是新的一天。",
        "你在GreenMart的水果部工作。每天的任务是切8小时水果。",
        "芒果、菠萝、西瓜、哈密瓜。日复一日。",
        "你拖着身体下床，脑子里回响着昨晚刷到的新闻——",
        "\u201cAI将在未来五年取代40%的工作岗位。\u201d",
        "你看了一眼自己满是小伤口的手。",
        "这种工作，AI大概还不屑于取代吧。",
        "\u2026\u2026",
        "但你不确定这算安慰还是讽刺。"
      ],
      en: [
        "3:45 AM. The alarm goes off.",
        "You fumble for your phone in the dark. The screen light stings your eyes.",
        "Another day.",
        "You work in the produce department at GreenMart. Eight hours of cutting fruit, every day.",
        "Mangoes, pineapples, watermelons, cantaloupes. Day after day.",
        "You drag yourself out of bed, last night's headline still echoing\u2014",
        "\u201cAI expected to replace 40% of jobs within five years.\u201d",
        "You glance at your hands, covered in tiny cuts.",
        "This kind of work\u2014AI probably can't even be bothered to replace it.",
        "\u2026",
        "You're not sure if that's comforting or just pathetic."
      ]
    },
    choices: {
      zh: [{ text: "继续这份工作", next: "keep_working" }, { text: "辞职", next: "quit" }],
      en: [{ text: "Keep this job", next: "keep_working" }, { text: "Quit", next: "quit" }]
    }
  },
  keep_working: {
    text: {
      zh: [
        "你决定继续。",
        "不是因为热爱，是因为你还没想好下一步。",
        "而且\u2026\u2026房租不会因为你的迷茫就少收一分钱。",
        "日子照常过着。切水果。回家。刷手机。睡觉。",
        "一个月后，社交媒体上突然全是同一个话题——",
        "\u201cAgent自动化，普通人也能用AI创业！\u201d",
        "\u201c用Agent三天做出百万营收副业\u201d",
        "\u201c不会写代码也能让AI帮你干活\u201d",
        "你刷着这些帖子，拇指停在了一个视频上：",
        "一个跟你差不多大的人，辞了服务业的工作，",
        "现在每天在家对着电脑说话就能赚钱。",
        "你看了一眼自己切水果切到发白的指关节。",
        "明天还是要4点起床。"
      ],
      en: [
        "You decide to stay.",
        "Not out of love for the job. You just haven't figured out what's next.",
        "Besides\u2026 rent doesn't care about your existential crisis.",
        "Life goes on. Cut fruit. Go home. Scroll phone. Sleep.",
        "A month later, social media explodes with the same topic\u2014",
        "\u201cAI Agents: anyone can automate their way to a business!\u201d",
        "\u201cBuilt a six-figure side hustle with an Agent in three days\u201d",
        "\u201cNo coding needed\u2014let AI do the work for you\u201d",
        "Your thumb stops on a video:",
        "Someone your age, quit their service job,",
        "now makes money talking to a computer at home.",
        "You look at your knuckles, white from gripping fruit knives.",
        "Tomorrow is still 4 AM."
      ]
    },
    choices: {
      zh: [{ text: "回家倒头就睡，太累了", next: "just_sleep" }, { text: "下班后开始学写代码", next: "learn_coding" }],
      en: [{ text: "Go home and crash. Too tired.", next: "just_sleep" }, { text: "Start learning to code after work", next: "learn_coding" }]
    }
  },
  just_sleep: {
    text: {
      zh: [
        "你选择了睡觉。",
        "不是放弃，只是太累了。",
        "一天又一天。一年又一年。",
        "每年涨薪3%。通胀4.5%。",
        "你的工资在涨，你的生活在缩。",
        "你试着申请调去烘焙部——被拒了。",
        "申请shift leader——被拒了。",
        "\u201c你不太适合跟顾客打交道。\u201d经理说。",
        "你想反驳，但发现自己确实已经很久没跟人正常说过话了。",
        "每天凌晨4点起床，在冷库里切水果，",
        "下班回家天已经黑了。室友在客厅看剧，你直接进房间关门。",
        "三年后你照镜子，吓了一跳。",
        "眼袋深得像淤青，法令纹像刀刻的。看起来比实际老了十岁。",
        "你存款$4,200。三年，只存了这么多。",
        "不够搬出合租屋。不够回家。不够去任何地方。",
        "你的世界就是那条路线：公寓——公交站——GreenMart——公交站——公寓。",
        "有时候你在公交车上看到别人在笑，",
        "会想：那是什么感觉来着？",
        "你已经想不起来了。",
        "",
        "\u3010结局：钝刀\u3011"
      ],
      en: [
        "You choose sleep.",
        "It's not giving up. You're just too tired.",
        "Day after day. Year after year.",
        "Annual raise: 3%. Inflation: 4.5%.",
        "Your paycheck grows. Your life shrinks.",
        "You apply for a transfer to bakery\u2014denied.",
        "Apply for shift leader\u2014denied.",
        "\u201cYou're not really a people person,\u201d the manager says.",
        "You want to argue, but realize you can't remember the last time you had a real conversation.",
        "Up at 4 AM, cutting fruit in the cold room.",
        "Home after dark. Your roommate watches TV. You close your bedroom door.",
        "Three years later, you catch yourself in the mirror. You flinch.",
        "Eye bags like bruises. Lines carved deep. You look a decade older than you are.",
        "Savings: $4,200. Three years, and that's all you have.",
        "Not enough to move out. Not enough to go home. Not enough to go anywhere.",
        "Your world is one route: apartment\u2014bus stop\u2014GreenMart\u2014bus stop\u2014apartment.",
        "Sometimes you see people laughing on the bus,",
        "and you think: what does that feel like again?",
        "You can't remember.",
        "",
        "\u3010Ending: Dull Blade\u3011"
      ]
    },
    choices: { zh: [], en: [] }
  },
  learn_coding: {
    text: {
      zh: [
        "你开始学用Agent。",
        "每天下班后，别人在刷剧，你在研究prompt engineering。",
        "凌晨4点起床上班，晚上11点还在调workflow。",
        "有时候你怀疑自己是不是在自虐。",
        "但每次Agent跑通一个复杂任务的那一刻\u2014\u2014",
        "那种感觉，比切出一个完美的芒果丁好多了。",
        "三个月后，你做出了一个真正好用的东西。",
        "一个帮小时工自动追讨欠薪的工具。",
        "你知道这个痛点，因为你自己就被克扣过。",
        "产品确实好。用过的人都说好。",
        "但你没钱推广。一百条帖子，最高12个赞。",
        "半年后，一家大公司用Agent三天复刻了你的产品。",
        "他们有钱、有流量、有渠道。你的作品，死了。",
        "你甚至不生气。你只是觉得累。",
        "然后更大的浪来了。",
        "Agent越来越强。人人都会用。",
        "超市裁了一半人。快递站裁了一半人。客服全没了。",
        "会用Agent不再是优势，就像会用搜索引擎不是优势一样。",
        "而那些拥有算力、拥有数据、拥有平台的人，",
        "财富像失控的滚雪球一样膨胀。",
        "GDP创了新高。股市创了新高。",
        "你的房租也创了新高。",
        "你站在GreenMart门口，看着满街的无人配送车。",
        "货架上的东西比以前多了三倍，也便宜了。",
        "但你连一个人住都住不起。",
        "这个世界从未如此富有。",
        "而你从未如此贫穷。",
        "你想问为什么。",
        "为什么三个人拥有的财富比全世界一半的人加起来还多？",
        "为什么AI让生产力翻了三倍，而你的时薪只涨了五毛？",
        "生产力过剩了。商品过剩了。算力过剩了。",
        "唯独不过剩的，是分到你手里的那一份。",
        "但你知道没人会回答。",
        "有答案的人不需要回答。",
        "没答案的人不配提问。",
        "",
        "\u3010结局：丰饶的荒漠\u3011"
      ],
      en: [
        "You start learning to use AI Agents.",
        "After work, while others binge shows, you study prompt engineering.",
        "Up at 4 AM for work, still tweaking workflows at 11 PM.",
        "Sometimes you wonder if this is just self-torture.",
        "But every time an Agent nails a complex task\u2014",
        "that feeling is better than cutting the perfect mango cube.",
        "Three months in, you build something genuinely useful.",
        "A tool that helps hourly workers automatically recover stolen wages.",
        "You know this pain. Your own pay was skimmed before.",
        "The product is good. Everyone who tries it says so.",
        "But you can't afford to market it. A hundred posts, twelve likes max.",
        "Six months later, a big company clones your product with an Agent in three days.",
        "They have money, traffic, distribution. Your creation dies.",
        "You're not even angry. Just tired.",
        "Then the bigger wave hits.",
        "Agents get stronger. Everyone learns to use them.",
        "Supermarkets cut half their staff. Delivery centers, half. Customer service, gone.",
        "Using an Agent is no longer an advantage\u2014like knowing how to Google isn't an advantage.",
        "Meanwhile, those who own the compute, the data, the platforms\u2014",
        "their wealth snowballs out of control.",
        "GDP hits record highs. Markets hit record highs.",
        "Your rent hits record highs.",
        "You stand outside GreenMart, watching autonomous delivery bots roll by.",
        "The shelves hold three times more than before, and it's cheaper too.",
        "But you still can't afford to live alone.",
        "The world has never been this rich.",
        "And you have never been this poor.",
        "You want to ask why.",
        "Why do three people own more wealth than half the world combined?",
        "Why did AI triple productivity while your hourly wage went up fifty cents?",
        "There's a surplus of everything. Goods. Compute. Output.",
        "The only thing that isn't surplus is your share.",
        "But you know no one will answer.",
        "Those who have the answer don't need to.",
        "Those who don't aren't worth answering.",
        "",
        "\u3010Ending: Desert of Plenty\u3011"
      ]
    },
    choices: { zh: [], en: [] }
  },
  quit: {
    text: {
      zh: [
        "你交了辞职信。",
        "经理看了你一眼，连挽留都没有。",
        "走出GreenMart的那一刻，阳光晃得你睁不开眼。",
        "自由的感觉持续了大约\u2026\u2026三天。",
        "然后你看了一眼银行账户。",
        "存款：$2,847。",
        "房租：$1,200/月。",
        "你需要做一个决定。"
      ],
      en: [
        "You hand in your resignation.",
        "The manager glances at it. Doesn't even try to keep you.",
        "Walking out of GreenMart, the sunlight blinds you.",
        "Freedom lasts about\u2026 three days.",
        "Then you check your bank account.",
        "Balance: $2,847.",
        "Rent: $1,200/month.",
        "You need to make a decision."
      ]
    },
    choices: {
      zh: [{ text: "打电话给爸妈", next: "ask_parents" }, { text: "极度节省，靠存款撑着", next: "frugal" }],
      en: [{ text: "Call your parents", next: "ask_parents" }, { text: "Cut all spending. Survive on savings.", next: "frugal" }]
    }
  },
  ask_parents: {
    text: {
      zh: [
        "\u201c妈，我辞职了。\u201d",
        "电话那头沉默了很久。",
        "然后你妈说了一句你这辈子最怕听到的话：",
        "\u201c回来吧，妈养你。\u201d",
        "你回了家。",
        "第一天，妈做了你爱吃的菜。爸没说话。",
        "第三天，妈\u201c不经意\u201d地提起邻居家的孩子考上了公务员。",
        "第七天，爸终于开口了：",
        "\u201c我就说你这个性格，干什么都是三分钟热度。\u201d",
        "你想反驳。但你吃着他们的饭，住着他们的房子。",
        "你闭嘴了。",
        "妈开始替你做所有决定。几点吃饭，穿什么衣服，该不该出门。",
        "\u201c都是为你好。\u201d",
        "你一个成年人，活得像个小孩。",
        "你投简历。没人回。你开始不投了。",
        "爸妈的退休金不多，但够三个人吃饭。刚好。",
        "刚好意味着没有任何多余的钱。",
        "没有旅行。没有新衣服。没有任何属于你自己的东西。",
        "你偶尔帮忙做饭，洗碗，拖地。",
        "妈说：\u201c你看，还是在家好吧。外面哪有人要你。\u201d",
        "你不知道这是关心还是诅咒。",
        "一年。五年。十年。",
        "爸妈老了。你也不年轻了。",
        "家里的积蓄像沙漏一样往下漏。",
        "你终于意识到应该存钱的时候，已经来不及了。",
        "你没有工作经历。没有技能。没有积蓄。",
        "只有一个越来越小的房子，和两个越来越老的人。",
        "有一天你收到一封养老院的宣传册。",
        "你看了一眼价格，把它扔进了垃圾桶。",
        "不是给爸妈看的。是给你自己看的。",
        "",
        "\u3010结局：笼\u3011"
      ],
      en: [
        "\u201cMom, I quit my job.\u201d",
        "Silence on the other end. A long time.",
        "Then she says the words you've dreaded your whole life:",
        "\u201cCome home. We'll take care of you.\u201d",
        "You go home.",
        "Day one: Mom cooks your favorite dish. Dad says nothing.",
        "Day three: Mom \u201ccasually\u201d mentions the neighbor's kid got a government job.",
        "Day seven: Dad finally speaks:",
        "\u201cI always said you had no follow-through.\u201d",
        "You want to argue. But you're eating their food. Sleeping under their roof.",
        "You shut up.",
        "Mom starts making every decision for you. When to eat, what to wear, whether you can go out.",
        "\u201cIt's all for your own good.\u201d",
        "A grown adult, living like a child.",
        "You send r\u00e9sum\u00e9s. No one replies. You stop sending them.",
        "Your parents' pension isn't much, but it feeds three. Barely.",
        "Barely means nothing left over.",
        "No trips. No new clothes. Nothing that's yours.",
        "You help with dishes, mopping, cooking sometimes.",
        "Mom says: \u201cSee? Home is better. No one out there wants you anyway.\u201d",
        "You can't tell if it's love or a curse.",
        "One year. Five. Ten.",
        "Your parents age. So do you.",
        "The family savings drain like an hourglass.",
        "By the time you realize you should have been saving, it's too late.",
        "No work history. No skills. No savings.",
        "Just a shrinking house and two people getting older.",
        "One day a nursing home brochure arrives in the mail.",
        "You look at the price. Toss it in the trash.",
        "It wasn't for your parents. It was for you.",
        "",
        "\u3010Ending: The Cage\u3011"
      ]
    },
    choices: { zh: [], en: [] }
  },
  frugal: {
    text: {
      zh: [
        "你开始过极简生活。",
        "每天只吃一顿饭。后来变成每两天一顿。",
        "你退掉了公寓，搬进一个隔断间。",
        "省下来的每一分钱都让你有一种病态的安全感。",
        "你开始害怕花钱。害怕出门。害怕跟人说话。",
        "冰箱空了。你告诉自己明天再去买。",
        "明天变成后天。后天变成下周。",
        "你的身体开始浮肿。头发一把一把地掉。",
        "你已经分不清饥饿和麻木的区别了。",
        "有一天邻居闻到了气味。",
        "破门而入的时候，你蜷缩在床上，",
        "手里还攥着手机，屏幕停在外卖APP的结算页面。",
        "你始终没有按下那个付款键。",
        "",
        "\u3010结局：饿殍\u3011"
      ],
      en: [
        "You start living minimal.",
        "One meal a day. Then one every two days.",
        "You give up your apartment. Move into a partitioned room.",
        "Every penny saved gives you a sick sense of security.",
        "You start to fear spending. Fear going out. Fear talking to anyone.",
        "The fridge is empty. You tell yourself you'll shop tomorrow.",
        "Tomorrow becomes the day after. The day after becomes next week.",
        "Your body swells. Your hair falls out in clumps.",
        "You can no longer tell the difference between hunger and numbness.",
        "One day a neighbor notices the smell.",
        "When they break down the door, you're curled up on the bed,",
        "phone still clutched in your hand, screen frozen on a food delivery checkout page.",
        "You never pressed pay.",
        "",
        "\u3010Ending: Famine\u3011"
      ]
    },
    choices: { zh: [], en: [] }
  }
};

window.GAME_EPILOGUE = {
  lines: [
    "\u201c你喜欢哪个结局？\u201d",
    "",
    "\u201c我没有喜欢的结局，因为都不是好结局。\u201d",
    "",
    "\u201c可是我发自内心地觉得，这些就是我的结局。\u201d",
    "",
    "\u201c不行。\u201d",
  ],
  nextUrl: "../ch1/",
  nextLabel: "第一章"
};
