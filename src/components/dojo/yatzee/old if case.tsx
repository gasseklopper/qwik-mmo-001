		// Rule 1-6
				// Ones, Twos, Threes, Fours, Fives, Sixes: The player scores the sum of the dice that reads one, two, three, four, five or six, respectively. For example, 1, 1, 2, 4, 4 placed on “fours” gives 8 points.
				if (ruleNumber.value === '1') {
					sumPoints.value +=
						store.dice.filter((rolledDie) => rolledDie === (Number(ruleNumber.value))).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '2') {
					sumPoints.value +=
						store.dice.filter((rolledDie) => rolledDie === (Number(ruleNumber.value))).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '3') {
					sumPoints.value +=
						store.dice.filter((rolledDie) => rolledDie === (Number(ruleNumber.value))).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '4') {
					sumPoints.value +=
						store.dice.filter((rolledDie) => rolledDie === (Number(ruleNumber.value))).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '5') {
					sumPoints.value +=
						store.dice.filter((rolledDie) => rolledDie === (Number(ruleNumber.value))).length * Number(ruleNumber.value)
				}
				if (ruleNumber.value === '6') {
					sumPoints.value +=
						store.dice.filter((rolledDie) => rolledDie === (Number(ruleNumber.value))).length * Number(ruleNumber.value)
				}
				// Pair: The player scores the sum of the two highest matching dice. For example, 3, 3, 3, 4, 4 placed on “pair” gives 8.
				if (ruleNumber.value === '7') {
					const wurst = submitDiceRoll(store.dice)
					let test = 0
					wurst.filter((elem, index) => {
						if (elem >= 2) {
							test = index + 1
						}
					})
					sumPoints.value += 2 * test
				}
				// Two pairs: If there are two pairs of dice with the same number, the player scores the sum of these dice. If not, the player scores 0. For example, 1, 1, 2, 3, 3 placed on “two pairs” gives 8.
				if (ruleNumber.value === '8') {
					// const wurst = submitDiceRoll(store.dice)
					const wurst3 = submitDiceRoll(store.dice)
					const arrayOfOne = Array.from(wurst3)

					const array2 = [3, 2, 0, 0, 0, 0]
					const array3 = [2, 2, 1, 0, 0, 0]
					// if (wurst3) {
					if (arrayOfOne.sort().join(',') === array2.sort().join(',') || arrayOfOne.sort().join(',') === array3.sort().join(',')) {
						const test = store.dice.reduce(function upps(total: number, num: number) {
							return (total + num) as Dice
						})

						let test1 = 0
						let test2 = 0

						wurst3.filter((elem, index) => {
							if (elem === 1) {
								test1 = index + 1
							}
						})
						wurst3.filter((elem, index) => {
							if (elem === 3) {
								test2 = index + 1
							}
						})

						sumPoints.value += test - test1 - test2
					} else {
						sumPoints.value += 0
					}
				}
				// Three of a kind: If there are three dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 3, 3, 3, 4, 5 places on “three of a kind” gives 9.
				if (ruleNumber.value === '9') {
					const wurst = submitDiceRoll(store.dice)
					let test = 0
					wurst.filter((elem, index) => {
						if (elem >= 3) {
							test = index + 1
						}
					})
					sumPoints.value += 3 * test
				}
				// Four of a kind: If there are four dice with the same number, the player scores the sum of these dice. Otherwise, the player scores 0. For example, 2, 2, 2, 2, 5 places on “four of a kind” gives 8.
				if (ruleNumber.value === '10') {
					const wurst = submitDiceRoll(store.dice)
					let test = 0
					wurst.filter((elem, index) => {
						if (elem >= 4) {
							test = index + 1
						}
					})
					sumPoints.value += 4 * test
				}
				// Small straight: If the dice read 1,2,3,4,5, the player scores 15 (the sum of all the dice), otherwise 0.
				if (ruleNumber.value === '11') {
					const wurst = submitDiceRoll(store.dice)
					if (equalsCheck([1, 1, 1, 1, 1, 0], wurst)) {
						sumPoints.value += 15
					} else {
						sumPoints.value += 0
					}
				}
				// Large straight: If the dice read 2,3,4,5,6, the player scores 20 (the sum of all the dice), otherwise 0.
				if (ruleNumber.value === '12') {
					const wurst = submitDiceRoll(store.dice)
					if (equalsCheck([0, 1, 1, 1, 1, 1], wurst)) {
						sumPoints.value += 20
					} else {
						sumPoints.value += 0
					}
				}
				// Full house: If the dice are two of a kind and three of a kind, the player scores the sum of all the dice. For example, 1,1,2,2,2 placed on “full house” gives 8. 4,4,4,4,4 is not “full house”.
				if (ruleNumber.value === '13') {
					const array2 = [3, 2, 0, 0, 0, 0]
					const wurst = submitDiceRoll(store.dice)
					if (wurst.sort().join(',') === array2.sort().join(',')) {
						sumPoints.value += store.dice.reduce(function upps(total: number, num: number) {
							return (total + num) as Dice
						})
					} else {
						sumPoints.value += 0
					}
				}
				// Yahtzee: If all dice are the have the same number, the player scores 50 points, otherwise 0.
				if (ruleNumber.value === '14') {
					const test = store.dice.filter((rolledDie) => rolledDie === store.dice[0]).length
					if (test === 5) {
						sumPoints.value += 50
					} else {
						sumPoints.value += 0
					}
				}
				// Chance: The player gets the sum of all dice, no matter what they read.The practitioner can feel free to create new categories as well.
				if (ruleNumber.value === '15') {
					sumPoints.value += store.dice.reduce(function upps(total: number, num: number) {
						return (total + num) as Dice
					})
				}


                ///////////////////////////////////////
                switch (ruleNumber.value) {
					// Ones to Sixes: Score the sum of the matching dice
					case '1':
					case '2':
					case '3':
					case '4':
					case '5':
					case '6':
						sumPoints.value += store.dice.filter((rolledDie) => rolledDie === Number(ruleNumber.value)).length * Number(ruleNumber.value);
						break;

					// Pair: Score the sum of the two highest matching dice
					case '7':
						const wurst = submitDiceRoll(store.dice);
						let test = 0;
						wurst.filter((elem, index) => {
							if (elem >= 2) {
								test = index + 1;
							}
						});
						sumPoints.value += 2 * test;
						break;

					// Two Pairs: Score the sum of these dice if two pairs are present
					case '8':
						const wurst3 = submitDiceRoll(store.dice);
						const arrayOfOne = Array.from(wurst3);
						const array2 = [3, 2, 0, 0, 0, 0];
						const array3 = [2, 2, 1, 0, 0, 0];

						if (arrayOfOne.sort().join(',') === array2.sort().join(',') || arrayOfOne.sort().join(',') === array3.sort().join(',')) {
							const test = store.dice.reduce(function upps(total, num) {
								return (total + num) as Dice;
							});

							let test1 = 0;
							let test2 = 0;

							wurst3.filter((elem, index) => {
								if (elem === 1) {
									test1 = index + 1;
								}
							});
							wurst3.filter((elem, index) => {
								if (elem === 3) {
									test2 = index + 1;
								}
							});
							sumPoints.value += test - test1 - test2;
						} 
						break;

					// Three of a Kind: Score the sum of the three matching dice
					case '9':
						const wurst9 = submitDiceRoll(store.dice);
						let test9 = 0;
						wurst9.filter((elem, index) => {
							if (elem >= 3) {
								test9 = index + 1;
							}
						});
						sumPoints.value += 3 * test9;
						break;

					// Four of a Kind: Score the sum of the four matching dice
					case '10':
						const wurst10 = submitDiceRoll(store.dice);
						let test10 = 0;
						wurst10.filter((elem, index) => {
							if (elem >= 4) {
								test10 = index + 1;
							}
						});
						sumPoints.value += 4 * test10;
						break;

					// Small Straight: Score 15 if the dice read 1,2,3,4,5
					case '11':
						const wurst11 = submitDiceRoll(store.dice);
						if (equalsCheck([1, 1, 1, 1, 1, 0], wurst11)) {
							sumPoints.value += 15;
						} else {
							sumPoints.value += 0;
						}
						break;

					// Large Straight: Score 20 if the dice read 2,3,4,5,6
					case '12':
						const wurst12 = submitDiceRoll(store.dice);
						if (equalsCheck([0, 1, 1, 1, 1, 1], wurst12)) {
							sumPoints.value += 20;
						} else {
							sumPoints.value += 0;
						}
						break;

					// Full House: Score the sum of all dice if there are two of a kind and three of a kind
					case '13':
						const array213 = [3, 2, 0, 0, 0, 0];
						const wurst13 = submitDiceRoll(store.dice);
						if (wurst13.sort().join(',') === array213.sort().join(',')) {
							sumPoints.value += store.dice.reduce(function upps(total, num) {
								return (total + num) as Dice;
							});
						} else {
							sumPoints.value += 0;
						}
						break;

					// Yahtzee: Score 50 if all dice have the same number
					case '14':
						const test14 = store.dice.filter((rolledDie) => rolledDie === store.dice[0]).length;
						if (test14 === 5) {
							sumPoints.value += 50;
						} else {
							sumPoints.value += 0;
						}
						break;

					// Chance: Score the sum of all dice
					case '15':
						sumPoints.value += store.dice.reduce(function upps(total, num) {
							return (total + num) as Dice;
						});
						break;

					default:
						// Handle other cases or do nothing for unknown ruleNumber values
						break;
				}