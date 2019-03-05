import React, { PureComponent } from "react";
import "../styles/about.css";

const quotes = [
  "Kris did such a good job on my kitchen, that I used him again for my son's kitchen. They are professional, honest, reasonably priced, and easy to work with. Kris interfaced with my architect on the first job, and dealt with my own rough drawings on the second job. First contractor I ever used who was able to complete two jobs on time! / JANE",
  "Kris and his team were professional and accomplished my construction job on time. We were new to doing any work on our place, and so had to trust in Kris and his team as we found him on the internet (instead of a recommendation). We couldn't have been more pleased. Kris was up front about the cost of the project and the timeline, and he stuck to both - which is invaluable when you are looking for a contractor. He and his team were nice, and got the job done with no surprises. They had to work around my stuff, as we stayed in our place while they were working, and they were even nice to my little dog who hung around while they worked! I would definitely recommend for a construction job. / EMILY K.",
  "Had Krys install a sliding wall yesterday. Absolutely love the final product and it was exactly what my husband and I were hoping for! The wall was designed with a track on top so our floors were not damaged (aside from the small circles that lock the panels in place). From the consultation process, which was scheduled within days of my initial inquiry, through the install (which was scheduled on my preferred date and time) everything was seamless - I highly recommend this company! / JAMIE T.",
  "Fantastic! I started looking for someone to install sliding doors and new kitchen cabinet doors and ended up using Kris Famurat for my apartment renovation. I've heard horror stories about NYC contractors, but Kris was very detailed-oriented, did GREAT work, finished on time and was fair & honest throughout the process. I highly recommend Famurat Builders! / C. DURANA",
  "Kris is so thorough, careful and precise. Not only did he do a beautiful job on building a sliding wall out of nicely designed acrylic panels, he was a pleasure to have working in my apt. My dog loved him. / IDEE S.",
  "Final product was perfect. Exceptional attention to detail. / GARIN T.",
  "Kris was wonderful to work with. My sliding door is not only beautiful but extremely functional. Kris built exactly what I needed in a remarkably short time frame and his prices beat out the competition. In addition he was extremely professional and responsive. I would use his company again without hesitation. / KATHRYN P.",
  "Kris is a very talented and resourceful contractor. His high quality workmanship came in on time and at a much more competitive price than his competitors. We are deeply grateful to Kris and his crew for their excellent work and kind professionalism. I would highly recommend Kris to anyone who desires a fair deal and high quality results. In a city where costs can easily become inflated Kris is someone worthy of your trust. / JONATHAN B.",
  "Immediately after Kris started to remodel our kitchen it was a high relief to confirm that he was, in deed, the right choice for the job. Without his holistic approach we don't think it would had been possible to successfully go through the process of such a big house remodeling project. Always patient and tolerant he was able to handle both the strong forces of tearing down a wall and the subtle nature of finishing a delicate wooden cabinet. Creative, meticulous, precise, flexible, disciplined and experienced hard worker. We would recommend Kris in a heartbeat. / RAFAEL B.",
  "We were looking for a commercial space with a shower and, this being New York City, we managed to find one converted into a 3-bdrm apartment. Since we needed a totally different layout, the walls had to be taken down, which left ugly scars across the entire floor. In fact, the hard wood planks have been removed, and sturdy metal railings were inserted in the floors to support the walls of the build bedrooms. Luckily, Kris being a good friend volunteered to fix the place. First he masterfully closed the gaping trenches in the floor (up to 6 inches wide). Secondly, we had to divide the space into two rooms. So he built the entire wall with ventilation and soundproofing, and hinged two sets of french doors. He cleaned the space and painted the wall. The work is of highest quality. I would like to notice that Kris is a professional not only in the results but in his approach as well. His van has all kinds of tools and instruments (including a vacuum cleaner because Kris removes the mess himself), so that everything can be done expertly and professionally. Whoever is thinking of hiring a contractor or handyman, don't look any further. / SASHA R.",
  "Kris custom built a desk for my husband. He did a beautiful job, selecting excellent wood and crafting it with fine details. It was a bit of a challenge because we needed the desk to fit a particular space. Also, my husband and I really like mid-century modern style furniture that is simple and functional. He did the perfect job of translating our vision into a reality. He is very reliable and very skilled. I would definitely recommend him for custom furniture and design interiors. / NATASHA C.",
  "Kris did excellent work in several jobs at our housing cooperative, ranging from small repairs to larger projects. He is glad to provide advice to clients, but also capable of working independently without oversight. He is meticulous in his work, and holds true to a speedy schedule. Highly recommended! / DR. LYNN R.",
  "Kris was a pleasure to work with throughout the project. He is both respectful and considerate. He communicated well when there were choices to consider, decisions to be made or problems to resolve. He listened carefully to my directions and was honest if my ideas were not feasible and explained why. We look forward to working with Kris on future projects. We are very pleased with our bathrooms, especially the details. / SALLY W.",
  "Kris and I have worked on different aspects of the same house. As a carpenter myself, I can say Kris's work is top of the line. He has good style and he gets the details just as fine as the big lines you see when you walk in a room. I would recommend him for any home project, large or small. / ADAM G.",
  "Although wanting for long time ago to replace the carpets with wood floors, the simple idea of the mess and work would cause me to postpone the project again and again. Fortunately we got a very suitable person to do the work. Kris carried out a nice job, on the offered time and no mess at all. Every night we were able to go to sleep like no floor work was taking place. We do not hesitate to recommend Kris as the expert for improvements. / MARY B.",
  "We were referred to Kris by one of our employees. We needed to add some shelves to the shower rooms in our spa. Kris was able to build shelves that match the rustic style and color of our current fixtures perfectly in a very short time! When installation was needed he was quick as well. We will definitely contact him again. / ALISON P."
];

let randNum = [];
for (let i = 1; i <= 2; i++) {
  let number = Math.round(Math.random() * 15);
  if (!randNum.includes(number)) randNum.push(number);
  else i = i - 1;
}

let uniqueQuotes = [];
for (var i = 0; i <= randNum.length - 1; i++) {
  if (!uniqueQuotes.includes(quotes[randNum[i]]))
    uniqueQuotes.push(quotes[randNum[i]]);
}

let allQuotes = uniqueQuotes.map((quote, index) => (
  <div className="quote" key={index}>
    <div className="quote-lines">{quote.split(" / ")[0]}</div>
    <div className="quote-names">{quote.split(" / ")[1]}</div>
  </div>
));

class Quotes extends PureComponent {
  render() {
    return (
      <div>
        <div className="container-quotes">{allQuotes}</div>
        <div className="logos-header">Read More About Us Here:</div>
        <div className="container-logos">
          <a
            href="https://www.yelp.com/biz/famurat-builders-brooklyn-2"
            target="_new"
          >
            <img
              id="yelp"
              style={{ width: "10vw" }}
              src={require(`../assets/Yelp_Logo.jpg`)}
              alt="Yelp Logo"
              className="logo"
            />
          </a>
          <img
            id="nyt"
            style={{ width: "25vw" }}
            src={require(`../assets/new-york-times-logo.png`)}
            alt="Yelp Logo"
            className="logo"
          />
          <a
            href="    https://blog.sweeten.com/before-after/kitchens/site-visit-a-developers-kitchen-gets-flipped/"
            target="_new"
          >
            <img
              id="sweeten"
              style={{ width: "8vw" }}
              src={require(`../assets/Sweeten_Logo.jpg`)}
              alt="Yelp Logo"
              className="logo"
            />
          </a>
        </div>
      </div>
    );
  }
}
export default Quotes;
