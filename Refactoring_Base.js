function statement(invoice, plays){
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = 'Billing History (Customer Name: ${invoice.customer})\n';
    const format = new Intl.NumberFormat("en-US",{style: "currency", currency: "USD", minimumFractionDigits: 2}).format;

    for(let perf of invoice.performances){
        const paly = playFor(perf);
        let thisAmount = amountFor(perf, play);

        volumeCredits += Math.max(per.audience - 30, 0);
        if("comedy" === play.type){
            volumeCredits += Math.floor(per.audience / 5);
        }

        result += ' ${play.name}: ${format(thisAmount/100)} (${perf.audience}seat)\n';
        totalAmount += thisAmount;
    }
    result += 'Total Amount: ${format(totalAmount/100}\n';
    result += 'Points Earned: ${volumeCredits}point\n';
    return result;

    function amountFor(aPerformance, play){
        let result = 0;

        switch(play.type){
            case "tragedy":
                result = 40000;
                if(aPerformance.audience > 30){
                    thisAmount += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if(aPerformance.audience > 20){
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error('Unknown Genre : ${play.type}');
        }
        return result;
    }
    
    function playFor(aPerformance){
        return plays[aPerformance.playID];
    }
}